const API_URL = process.env.WORDPRESS_API_URL

async function fetchAPI(query, { variables } = {}) {
	const headers = { 'Content-Type': 'application/json' }

	const res = await fetch(API_URL, {
		method: 'POST',
		headers,
		body: JSON.stringify({
			query,
			variables,
		}),
	})

	const json = await res.json()
	if (json.errors) {
		console.error(json.errors)
		throw new Error('Failed to fetch API')
	}
	return json.data
}

export async function getAllVehicles() {
  const data = await fetchAPI(`
  query NewQuery {
    vehicles {
      edges {
        node {
          title
          slug
          featuredImage {
            node {
              altText
              mediaDetails {
                height
                width
              }
              sourceUrl
            }
          }
          vehicleInformation {
            vehicleTypes
            trimLevels {
              msrp
              images {
                large {
                  altText
                  mediaDetails {
                    height
                    width
                  }
                  sourceUrl
                }
              }
            }
          }
        }
      }
    }
  }
  `);
  return data?.vehicles.edges;
}
export async function getAllVehicleSlugs() {
     const data = await fetchAPI(`
     query NewQuery {
         vehicles {
           edges {
             node {
               slug
             }
           }
         }
       }
     `);
     return data?.vehicles.edges;
}
export async function getVehicleDataBySlug(slug) {
    const data = await fetchAPI(`
query NewQuery($id: ID!) {
      vehicle(idType: SLUG, id: $id) {
        title
        slug
        featuredImage {
          node {
            altText
            mediaDetails {
              height
              width
            }
            sourceUrl(size: LARGE)
          }
        }
        vehicleInformation {
          vehicleColors {
            swatch {
              name
              swatchInformation {
                hexValue
              }
            }
            image {
              sourceUrl
              altText
              mediaDetails {
                width
                height
              }
            }
          }
          showcase {
            headline
          }
          trimLevels {
            name
            images {
              large {
                altText
                mediaDetails {
                  height
                  width
                }
                sourceUrl
              }
              thumbnail {
                altText
                mediaDetails {
                  height
                  width
                }
                sourceUrl
              }
            }
            mpg {
              hwy
              city
            }
            msrp
          }
        }
      }
    }
    `, {
		variables: {
			"id": slug
		}
})
	return data?.vehicle
}


const pages = [
  {
    title: "Vehicles",
    slug: "vehicles"
  },
  {
    title: "Build & Price",
    slug: null
  },
  {
    title: "Shopping Tools",
    slug: null
  },
  {
    title: "Our Commitment",
    slug: null  
  },
  {
    title: "Owners",
    slug: null
  }
];

export function getPages() {
  return pages;
}