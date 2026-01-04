const events = [
  {
    year: 2025,
    term: "Fall",
    title: "ACU Winter Village",
    image: "events/event_f25_winter.png",
    description: "ACU Winter Village is a cozy, festive event perfect for warming up and enjoying the holiday season with friends. Join us for a night filled with fun activities and games, exciting prizes, and plenty of Asian food and drinks, all while meeting new people and making connections. Come early if you can and get ready for a relaxed, cheerful evening—we look forward to seeing you there."
  },
  {
    year: 2025,
    term: "Fall",
    title: "ACU Squid Game",
    image: "events/event_f25_squid.png",
    description: "ACU Squid Game is a social night inspired by the popular series, featuring themed games, prizes, and Asian food and drinks. Whether you’re a fan or just looking to hang out and meet new people, join us in the GCASL Grand Hall (5th floor) on Wednesday, October 8th at 7:00 PM—everyone is welcome."
  },
  {
    year: 2025,
    term: "Spring",
    title: "ACU Zen",
    image: "events/event_s25_zen.png",
    description: "Take a break from midterms and find your inner calm at ACU Zen! Join us for a relaxing evening filled with soothing vibes, free Muji notebooks, and delicious snacks to help you recharge. Whether you're looking to unwind or just enjoy a peaceful escape, this is the perfect way to de-stress."
  },
  {
    year: 2025,
    term: "Spring",
    title: "ACU Swoon",
    image: "events/event_s25_swoon.png",
    description: "Get ready for a romantic and enchanting evening at ACU Swoon! Come enjoy Valentine's-themed games, activities, and sweet treats that will make your heart flutter. Join us for a night of love and fun you won't want to miss!"
  },
  {
    year: 2024,
    term: "Fall",
    title: "ACU NOM",
    image: "events/event_f24_NOM.png",
    description: "Calling all food lovers! ACU's annual NOM is back for a mouthwatering celebration of delicious cuisines. Indulge in an array of dishes, explore exciting flavors, and connect with friends over your favorite bites. Come hungry and leave happy!"
  },
  {
    year: 2024,
    term: "Fall",
    title: "ACU FRIGHT NIGHT",
    image: "events/event_f24_fright.png",
    description: "Get ready for a spooky and thrilling evening at ACU Fright Night! Come enjoy Halloween-themed games, activities, and free treats that will send shivers down your spine. Don't forget to dress up for a chance to win prizes in our costume contest. Join us for a night of chills and fun you won’t want to miss!"
  },
  {
    year: 2024,
    term: "Fall",
    title: "ACU FALL FESTIVAL",
    image: "events/event_f24_fall.png",
    description: "Celebrate the cozy vibes of fall with ACU at our Fall Festival! Enjoy free food, exciting games, and fun activities to embrace the autumn season. Don't miss out on the chance to win awesome prizes in our raffles. Join us for an unforgettable evening of festivities"
  },
  {
    year: 2024,
    term: "Spring",
    title: "ACU Spring Festival",
    image: "events/event_s24_springfest.png",
    description: "Come join us for the carnival/festival celebration of the spring season with free food, games, and activities. We will be holding raffles for prizes as well, so come and have fun with ACU to close out the semester!"
  },
  {
    year: 2024,
    term: "Spring",
    title: "ACU Inferno",
    image: "events/event_s24_inferno.jpg",
    description: "Inspired by the hit show Single's Inferno, ACU is excited to bring you ACU Inferno! Come meet our lovely E-Board members that will be raffled off for suitors. ACU is also excited to host YouTuber Kelly Wakasa as a special guest for this event!"
  },
  {
    year: 2023,
    term: "Fall",
    title: "ACU MUJI-CAL",
    image: "events/event_f23_muji.png",
    description: "Come join us at Kimmel E&L for your favorite Japanese goodies! We'll have games, arts and crafts, and of course... prizes!"
  },
  {
    year: 2023,
    term: "Fall",
    title: "ACU NOM",
    image: "events/event_f23_nom.png",
    description: "Each year, we host our annual food festival! Join us for free food from places like Saigon Shack and drinks from our partner Whistle and Fizz at Kimmel."
  },
  {
    year: 2023,
    term: "Fall",
    title: "ACU Retirement Home",
    image: "events/event_f23_retirement.png",
    description: "Give your old souls a break from midterms and come join us for a night of games, snacks, and prizes! Play games like gingo, mahjong, and gonggi to win prizes."
  },
  {
    year: 2023,
    term: "Spring",
    title: "ACU x JCA Spring Festival",
    image: "events/event_spring_festival_s23.png",
    description: "Our final and biggest event of the semester is here! Come join us at Kimmel for the ACU x JCA Spring Festival! There will be plenty of food as well as Asian games and prizes from student vendors. We also heard that Twice and Blackpink will be performing at the event so don't miss out!"
  },
  {
    year: 2023,
    term: "Spring",
    title: "ACU Palentines",
    image: "events/event_s23_palentines.png",
    description: "Valentine's day may be over but you can still make it to our Palentines day event! Come out and join us to decorate Insomnia cookies and try winning a date with one of our e-board members!"
  },
  {
    year: 2022,
    term: "Fall",
    title: "ACU Idol",
    image: "events/event_f22_idol.jpg",
    description: "Every year, we hold a singing competition for talented individuals to compete for the title of ACU Idol! Come hang out with us for food and fun!"
  },
  {
    year: 2022,
    term: "Fall",
    title: "Game Night",
    image: "events/event_f22_game_night.jpg",
    description: "Join us for another night in Kimmel to play some fun games such as Mahjong, Gonggi, Sushi Go, and more! Did we mention there will be some amazing prizes too?"
  },
  {
    year: 2022,
    term: "Fall",
    title: "Sips n' Craft",
    image: "events/event_f22_sips.jpg",
    description: "ACU is back! Come out to our first event of the year in Kimmel E&L (Floor 4 Auditorium) to decorate tote bags and notebooks all while drinking delicious boba! See you there 😉"
  },
  {
    year: 2022,
    term: "Spring",
    title: "Asian Cartoon Utopia",
    image: "events/event_s22_utopia.jpg",
    description: "Come hang out with us and your favorite cartoon/anime characters at Kimmel Rosenthal!🎉 We'll have games, arts and crafts, and of course... prizes!"
  },
  {
    year: 2022,
    term: "Spring",
    title: "Arts and Crafts Night",
    image: "events/event_s22_crafts.jpg",
    description: "Our first in-person event of the S22 semester - Arts and Crafts Night 🎉!Join us for tote bag painting, felting, beading, origami, and other fun arts and crafts at Kimmel Rosenthal 🥰"
  },
  {
    year: 2021,
    term: "Fall",
    title: "Ghibli Getaway",
    image: "events/event_ghibli.jpg",
    description: "Play carnival games to win Ghibli-themed prizes and bottle your own soot sprites to take home! Connect with other Ghibli fans over free food!"
  },
  {
    year: 2021,
    term: "Fall",
    title: "Super Smash Bros Ultimate Tournament",
    image: "events/event_smash.jpg",
    description: "Come out to our Super Smash Bros Ultimate Tournament for a FREE-to-enter tournament with CASH prizes and free food!"
  },
  {
    year: 2021,
    term: "Fall",
    title: "Midterm Destress",
    image: "events/event_f21_midterm_destress.jpg",
    description: "Midterm season is here, so take a break at Kimmel and pick up some free Muji stationary and pens! Supplies are limited, be sure to snag yours before we run out!"
  }
];

export default events;
