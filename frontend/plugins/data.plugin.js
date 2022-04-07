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
    title: "Birth of PhobosMedia",
    except:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet mollis mauris, congue lacinia dolor. Pellentesque sit amet diam condimentum.",
    body: "Well, after gaining some experience overall, as you likely understood from the previous articles, combined together with my entrepreneurial spirit, I opened my first company, called PhobosMedia. This company started creating products for clients, mostly in the web industry, but I eventually worked as film-maker (another passion of mine), and a couple of times developed non web apps, for research purposes for a couple of clients. And I really like where this journey is bringing me. I keep learning about new technologies and techniques, but I also keep learning about core entrepreneurial skills, like negotiating, closing deals, mitigating risk and so on. Also, having finished another great pilot organized once again by the CoderClass, this time with the Vrije Universiteit, about C++, I am refining that skill as well, and I am starting to use it commercially for my clients!",
    date: "11th March 2020",
    emoji: "👔",
  },
  {
    id: 2,
    slug: "test-article-2",
    title: "Quantum Computing and more",
    except:
      "In 2020, thanks to my school, I partook to a pilot with the univesity of Amsterdam, about Quantum Computing.",
    body: "Back in 2020, my highschool organized a pilot with the university of Amsterdam, regarding quantum computing. Which I found extremely interesting. We learn about most of the linear algebra behind it, subsequently we learned about quantum circuits, gates, and complex operations, and finally we learned how to devise quanum algorythms. At the end I passed as one of the best 7 parttakers of the pilot, and got gifted two wonderful books from the main professor of the course: Dr. Micheal Walter. A year after that, when I had to write my profile essay for school, I decided to write it about quantum computing. Which revealed to be a huge learning opportunity. I got to intervierw a researcher from the University of Amsterdam, Dr. F. Speelman. And I also wrote an experiment and ran it on a real IBM quantum computer.",
    date: "11th March 2020",
    emoji: "⚛",
  },
  {
    id: 3,
    slug: "test-article-3",
    title: "Science related projects",
    except:
      "Whilst my love for the web was growing more and more, I never stopped having my fun with local programs, mostly coded in python.",
    body: "Whilst my love for the web was growing more and more, I never stopped having my fun with local programs, mostly coded in python. Back then, then when I first started working with a frined of mine, who is a reasearcher in the astronomiacal field. We soon started to develop software to help us to execute better atronomical observations of the sky, and I started working on a wat to motorize and control via software an old telescope mount we were palying with back then. However, back to the observations software. It was called WebCam Extender, and what it basically allowed you to do, is to do a real time stacking of the frames of a webcam, so as to ultimately have a more bright view of the sky, which allows you to capture more stars, when observing, even is the quality of the webcam wasn't that great.",
    date: "11th March 2020",
    emoji: "🔭",
  },
  {
    id: 4,
    slug: "test-article-4",
    title: "Love for the web",
    except:
      "After my journey with quite a few different languages, I landed on web-dev.",
    body: "After my journey with quite a few different languages, I landed on web-dev. I still remember my first little website, made just in HTML and CSS. I mean, it looked aweful, by it was my little aweful website. I was proud of it. And after that I started falling more and more in love with it. For a bit of context I am also really passionate about entrepreneurship. And when I discovered the web, I soon discovered the doors that it opens to helping small businesses. Think about marketing, brand identity, and so on. And furthermore, I also discovered my passion for design, which I had never explored before. Well after focusing on the web for a couple of months, I eventually got my first client. Now, the pay was close to non-existent, but I didn't care, I had scored my first client! Back then I was still working with plan HTML, CSS, and JavaScript. I didn't know how to use frameworks like JQuery or React.",
    date: "11th March 2020",
    emoji: "🌐",
  },
  {
    id: 5,
    slug: "my-first-approach-to-programming",
    title: "My first approach to programming",
    except:
      "My story of how I discovered programming, and fell in love with it!",
    body: "As I kid I always enjoyed technical things. I loved to wrap my head around different problems and to build stuff of my own. So I started with electronics at first. After having had my fun with basic circuits, I discovered Arduino, and that's when I fell in love with programming. I was about 12 years old back then. Since then I really dirtied my hands with everything, from Lua to Visual Basic, C++, then later python and finally Javascript and web related languages. But so far, I never really studied computer science at school. It was just a really fun hobby for me, that I kept learning abour and teaching myself. But when I was around 14 years old, I moved from Italy, my home country, to the Netherlands. After a couple of years of bridge school years, in order to learn the language, that's when I realy started to study computer science at school. The highschool where I landed called Metis, has a program called 'CoderClass', that teaches different realms of programming to kids of very diverse ages. And even tho I joind the program later, I still profited a lot from having someone teach computer science to me. Don't get me wrong, self-teaching is awesome. But to make an analogy, you can teach yourself how to write, but other people can teach you how to make poetry. ",
    date: "11th March 2020",
    emoji: "👨‍💻",
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
