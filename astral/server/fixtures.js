if (Posts.find().count() === 0) {
  Posts.insert({
    title: 'Chinese astrology',
    author: 'Sacha Something',
    url: 'https://www.facebook.com/pages/Chinese-astrology/107534719269982?rf=104097332959461'
  });

  Posts.insert({
    title: 'Astral Projection',
    author: 'Mani Frontend',
    url: 'https://www.facebook.com/pages/Astral-projection/106099772754322'
  });

  Posts.insert({
    title: 'Australia.com Fan Page',
    author: 'Iscak Canguro - Regional Website',
    url: 'https://www.facebook.com/SeeAustralia/'
  });
}
