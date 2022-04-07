export function getAllBlogs() {
  return null;
}

export function getBlogById(id) {
  return null;
}

// Dummy Data

const allCases = [
  {
    id: 1,
    slug: "test-article-1",
    title: "Test article one",
    except:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet mollis mauris, congue lacinia dolor. Pellentesque sit amet diam condimentum.",
    body: "This is my beautiful article!",
    date: "11th March 2020",
  },
  {
    id: 2,
    slug: "test-article-2",
    title: "Test article two",
    except:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet mollis mauris, congue lacinia dolor. Pellentesque sit amet diam condimentum.",
    body: "This is my beautiful article!",
    date: "11th March 2020",
  },
  {
    id: 3,
    slug: "test-article-3",
    title: "Test article three",
    except:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet mollis mauris, congue lacinia dolor. Pellentesque sit amet diam condimentum.",
    body: "This is my beautiful article!",
    date: "11th March 2020",
  },
  {
    id: 4,
    slug: "test-article-4",
    title: "Test article four",
    except:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet mollis mauris, congue lacinia dolor. Pellentesque sit amet diam condimentum.",
    body: "This is my beautiful article!",
    date: "11th March 2020",
  },
  {
    id: 5,
    slug: "test-article-5",
    title: "Test article five",
    except:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet mollis mauris, congue lacinia dolor. Pellentesque sit amet diam condimentum.",
    body: "This is my beautiful article!",
    date: "11th March 2020",
  },
];

export function getAllCases() {
  return allCases;
}

export function getCaseBySlug(slug) {
  return allCases.filter(function (el) {
    return el.slug == slug;
  })[0];
}
