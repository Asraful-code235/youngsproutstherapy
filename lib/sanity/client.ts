import {
  apiVersion,
  dataset,
  projectId,
  useCdn,
  previewSecretId,
} from "./config";
import {
  postquery,
  limitquery,
  paginatedquery,
  configQuery,
  singlequery,
  pathquery,
  allauthorsquery,
  authorsquery,
  postsbyauthorquery,
  postsbycatquery,
  catpathquery,
  catquery,
  getAll,
  searchquery,
  latestPostQuery,
  commentsQuery,
  // services
  getServicesList,
  serviceBySlug,
  teamListShort,
  teamListAll,
  teamListBySlug,
} from "./groq";
import { createClient } from "next-sanity";

if (!projectId) {
  console.error(
    "The Sanity Project ID is not set. Check your environment variables."
  );
}

const client = projectId
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn,
    })
  : null;

export const previewClient = projectId
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn,
      token: previewSecretId,
    })
  : null;

export const fetcher = async ([query, params]) => {
  return client ? client.fetch(query, params) : [];
};

(async () => {
  if (client) {
    const data = await client.fetch(getAll);
    if (!data || !data.length) {
      console.error(
        "Sanity returns empty array. Are you sure the dataset is public?"
      );
    }
  }
})();

export async function getAllPosts() {
  if (client) {
    return (await client.fetch(postquery)) || [];
  }
  return [];
}
export async function getAllServices() {
  if (client) {
    return (await client.fetch(getServicesList)) || [];
  }
  return [];
}
export async function getLatestPost() {
  if (client) {
    return (await client.fetch(latestPostQuery)) || [];
  }
  return [];
}

export async function getSettings() {
  if (client) {
    return (await client.fetch(configQuery)) || [];
  }
  return [];
}

export async function getPostBySlug(slug) {
  if (client) {
    return (await client.fetch(singlequery, { slug })) || {};
  }
  return {};
}

// get services by slug
export async function getServiceBySlug(slug) {
  if (client) {
    return (await client.fetch(serviceBySlug, { slug })) || {};
  }
  return {};
}

export async function getCommentsByPost(postId) {
  if (client) {
    return (await client.fetch(commentsQuery, { postId })) || [];
  }
  return [];
}

export async function getAllPostsSlugs() {
  if (client) {
    const slugs = (await client.fetch(pathquery)) || [];
    return slugs.map((slug) => ({ slug }));
  }
  return [];
}
// Author
export async function getAllAuthorsSlugs() {
  if (client) {
    const slugs = (await client.fetch(authorsquery)) || [];
    return slugs.map((slug) => ({ author: slug }));
  }
  return [];
}

export async function getAuthorPostsBySlug(slug) {
  if (client) {
    return (await client.fetch(postsbyauthorquery, { slug })) || {};
  }
  return {};
}

export async function getAllAuthors() {
  if (client) {
    return (await client.fetch(allauthorsquery)) || [];
  }
  return [];
}

// Category

export async function getAllCategories() {
  if (client) {
    const slugs = (await client.fetch(catpathquery)) || [];
    return slugs.map((slug) => ({ category: slug }));
  }
  return [];
}

export async function getPostsByCategory(slug) {
  if (client) {
    return (await client.fetch(postsbycatquery, { slug })) || {};
  }
  return {};
}

export async function getTopCategories() {
  if (client) {
    return (await client.fetch(catquery)) || [];
  }
  return [];
}

export async function getPaginatedPosts({ limit, pageIndex = 0 }) {
  if (client) {
    return (
      (await client.fetch(paginatedquery, {
        pageIndex: pageIndex,
        limit: limit,
      })) || []
    );
  }
  return [];
}

export async function searchPosts(title: any) {
  if (client) {
    // @ts-ignore
    return (await client.fetch(searchquery, { query: title })) || [];
  }
  return [];
}

export async function getShortTeamList() {
  if (client) {
    return (await client.fetch(teamListShort)) || [];
  }
  return [];
}
export async function getAllTeamList() {
  if (client) {
    return (await client.fetch(teamListAll)) || [];
  }
  return [];
}
export async function getTeamBySlug(slug) {
  if (client) {
    return (await client.fetch(teamListBySlug, { slug })) || {};
  }
  return [];
}
