const domain = process.env.SHOPIFY_STORE_DOMAIN
const storefrontAccessToken = process.env.STOREFRONT_ACCESS_TOKEN


// Shopify Data Access
async function ShopifyData(query) {
  const URL = `https://${domain}/api/2023-04/graphql.json`

  const options = {
    endpoint: URL,
    method: 'POST',
    headers: {
      'X-Shopify-Storefront-Access-Token': storefrontAccessToken,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  }

  try {
    const data = await fetch(URL, options).then((response) => {
      return response.json()
    })

    return data
  } catch (error) {
    throw new Error('Products not fetched')
  }
}

export async function getAllProducts() {
  const query = `
  {
  products(first: 25) {
    edges {
      node {
        id
        title
        handle
        priceRange {
          minVariantPrice {
            amount
          }
        }
        images(first: 5) {
          edges {
            node {
              originalSrc
              altText
            }
          }
        }
      }
    }
  }
}
`

  const response = await ShopifyData(query)

  const allProducts = response.data.products.edges
    ? response.data.products.edges
    : []

  return allProducts
}

export async function getAllProductHandles() {
  const query = `
    {
      products(first: 250) {
        edges {
          node {
            handle
          }
        }
      }
    }
  `

  const response = await ShopifyData(query)

  return response.data.products.edges.map((edge) => edge.node.handle)
}

export async function getProductByHandle(handle) {
  const query = `
    {
      productByHandle(handle: "${handle}") {
        id 
        title
        description
        descriptionHtml
        priceRange {
          minVariantPrice {
            amount
          }
        }
        images(first: 5) {
          edges {
            node {
              originalSrc
              altText
            }
          }
        }
      }
    }
  `

  const response = await ShopifyData(query)

  return response.data.productByHandle
}
