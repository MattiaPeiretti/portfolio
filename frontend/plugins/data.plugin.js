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
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet mollis mauris, congue lacinia dolor. Pellentesque sit amet diam condimentum, dignissim orci vel, pretium lorem. Praesent id finibus lacus. Fusce vitae dui elementum, consectetur ipsum vitae, tempor turpis. Vivamus facilisis et turpis vestibulum maximus. Praesent fermentum nisl quis urna cursus, at porta ligula dignissim. Mauris et odio scelerisque, finibus tortor in, hendrerit est. In eget dui pulvinar, aliquam mauris a, porttitor magna. Donec suscipit ipsum ut magna ultricies consectetur. Nunc vel tellus commodo, elementum sapien a, tincidunt massa. Fusce maximus metus vitae purus placerat, non tempor ipsum hendrerit. Mauris lobortis odio vel lectus aliquet, non auctor elit fermentum. Proin pretium turpis sed purus eleifend, ac consectetur nisi aliquet. Ut massa nunc, tristique et rutrum eu, varius non ipsum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus consequat dui eu dapibus dignissim. Etiam felis libero, lacinia quis sapien ultrices, imperdiet bibendum erat. Duis at urna magna. Quisque ut congue elit, elementum interdum augue. Nullam blandit elit sem, vel mollis nibh cursus vitae. Nunc elementum mi eget fermentum semper. Nunc mattis vehicula ornare. Etiam scelerisque pulvinar urna, id semper augue sodales a. Aliquam erat volutpat. In volutpat, turpis a consequat elementum, sapien lacus venenatis nisl, commodo placerat tellus lorem quis dolor. Phasellus venenatis scelerisque erat quis suscipit. Ut rhoncus, risus id venenatis gravida, leo nunc consectetur urna, convallis suscipit ipsum mauris vitae mi. Nunc auctor ultrices nulla eget dictum. Donec sit amet enim arcu. Suspendisse aliquam mi in feugiat malesuada. Vestibulum nec libero a purus luctus dapibus vel ut nisl. Nulla facilisi. Maecenas ut tellus at enim pretium tempor vitae vitae velit. Fusce porta nec est vel elementum. Sed non augue congue justo consequat porta. Integer luctus metus massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu vestibulum risus, ut posuere metus. Etiam ac nisi id libero fermentum aliquet in id risus. Vestibulum volutpat diam sed fringilla auctor. Vestibulum et ligula justo. Donec varius elit nisl, vel maximus sem luctus vitae. Nam ut lectus molestie, molestie augue vel, rhoncus magna. Phasellus porttitor vehicula sem tincidunt efficitur. Aliquam in rhoncus ante, eu consectetur eros. Suspendisse potenti. Nunc sodales dui sed diam rutrum, eleifend euismod leo pharetra. Sed id cursus ante. Phasellus a neque eu lacus facilisis finibus. Integer pretium libero vel quam facilisis iaculis. Fusce et nisi feugiat, tincidunt orci a, pulvinar odio. In hac habitasse platea dictumst. Mauris tempus quam metus, viverra imperdiet ligula tincidunt eget. Maecenas pellentesque risus nec mi cursus, non facilisis elit tristique. Nullam molestie, velit at imperdiet blandit, tellus nisl varius ipsum, quis vulputate odio odio bibendum lorem. Integer pellentesque facilisis dignissim. Aliquam rutrum ultrices mi, et auctor lacus interdum pretium. Fusce non consequat nibh. Curabitur aliquam eu odio in vulputate. Aenean mattis sem sit amet cursus porttitor. Nullam ornare justo a mi aliquam venenatis. Mauris in neque eget ligula pellentesque varius. Quisque tristique tincidunt purus, quis mattis neque fermentum nec. Donec viverra enim a congue volutpat. Duis nec velit vel lorem venenatis congue porttitor sed leo.",
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
