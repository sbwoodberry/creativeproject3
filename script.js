var app = new Vue({
  el: '#app',
  data: {
    players: [],
    hasSelected: false,
    loading: false,
    selectedPlayer: {
      id: 0,
      first_name: " ",
      last_name: " ",
      position: "",
      height_feet: 0,
      height_inches: 0,
      weight_pounds: 0,
      team:{
        id: 0,
        abbreviation: "",
        city: " ",
        conference: " ",
        division: " ",
        full_name: " ",
        name: " "
      }
    },
    searchName: ""
  },
  methods: {
    async searchPlayer() {
      try {
        if (this.searchName === "")
          return;
        this.loading = true;
        const response = await axios.get('https://www.balldontlie.io/api/v1/players/?search=' + this.searchName);
        this.players = JSON.parse(JSON.stringify(response.data));
        this.loading = false;
        this.searchName = "";
      } catch (error) {
        console.log(error);
      }
    },
    playerSelected(player) {
      this.selectedPlayer = player;
      this.hasSelected = true;
    }
  },
  computed: {
    teamImage() {
      //return "/images/nba-logo.png";
      teamName = this.selectedPlayer.team.name;
      switch(teamName) {
        case "Hawks":
          return "http://content.sportslogos.net/logos/6/220/thumbs/22091682016.gif";
          break;
        case "Celtics":
          return "http://content.sportslogos.net/logos/6/213/thumbs/slhg02hbef3j1ov4lsnwyol5o.gif";
          break;
        case "Nets":
          return "http://content.sportslogos.net/logos/6/3786/thumbs/hsuff5m3dgiv20kovde422r1f.gif";
          break;
        case "Hornets":
          return "http://content.sportslogos.net/logos/6/5120/thumbs/512019262015.gif";
          break;
        case "Bulls":
          return "http://content.sportslogos.net/logos/6/221/thumbs/hj3gmh82w9hffmeh3fjm5h874.gif";
          break;
        case "Cavaliers":
          return "http://content.sportslogos.net/logos/6/222/thumbs/22269212018.gif";
          break;
        case "Mavericks":
          return "http://content.sportslogos.net/logos/6/228/thumbs/22834632018.gif";
          break;
        case "Nuggets":
          return "http://content.sportslogos.net/logos/6/229/thumbs/22989262019.gif";
          break;
        case "Pistons":
          return "http://content.sportslogos.net/logos/6/223/thumbs/22321642018.gif";
          break;
        case "Warriors":
          return "http://content.sportslogos.net/logos/6/235/thumbs/qhhir6fj8zp30f33s7sfb4yw0.gif";
          break;
        case "Rockets":
          return "http://content.sportslogos.net/logos/6/230/thumbs/8xe4813lzybfhfl14axgzzqeq.gif";
          break;
        case "Pacers":
          return "http://content.sportslogos.net/logos/6/224/thumbs/22448122018.gif";
          break;
        case "Clippers":
          return "http://content.sportslogos.net/logos/6/236/thumbs/23654622016.gif";
          break;
        case "Lakers":
          return "http://content.sportslogos.net/logos/6/237/thumbs/uig7aiht8jnpl1szbi57zzlsh.gif";
          break;
        case "Grizzlies":
          return "http://content.sportslogos.net/logos/6/231/thumbs/23143732019.gif";
          break;
        case "Heat":
          return "http://content.sportslogos.net/logos/6/214/thumbs/burm5gh2wvjti3xhei5h16k8e.gif";
          break;
        case "Bucks":
          return "http://content.sportslogos.net/logos/6/225/thumbs/22582752016.gif";
          break;
        case "Timberwolves":
          return "http://content.sportslogos.net/logos/6/232/thumbs/23296692018.gif";
          break;
        case "Pelicans":
          return "http://content.sportslogos.net/logos/6/4962/thumbs/496226812014.gif";
          break;
        case "Knicks":
          return "http://content.sportslogos.net/logos/6/216/thumbs/2nn48xofg0hms8k326cqdmuis.gif";
          break;
        case "Thunder":
          return "http://content.sportslogos.net/logos/6/2687/thumbs/khmovcnezy06c3nm05ccn0oj2.gif";
          break;
        case "Magic":
          return "http://content.sportslogos.net/logos/6/217/thumbs/wd9ic7qafgfb0yxs7tem7n5g4.gif";
          break;
        case "76ers":
          return "http://content.sportslogos.net/logos/6/218/thumbs/21870342016.gif";
          break;
        case "Suns":
          return "http://content.sportslogos.net/logos/6/238/thumbs/23843702014.gif";
          break;
        case "Trail Blazers":
          return "http://content.sportslogos.net/logos/6/239/thumbs/23997252018.gif";
          break;
        case "Kings":
          return "http://content.sportslogos.net/logos/6/240/thumbs/24040432017.gif";
          break;
        case "Spurs":
          return "http://content.sportslogos.net/logos/6/233/thumbs/23325472018.gif";
          break;
        case "Raptors":
          return "http://content.sportslogos.net/logos/6/227/thumbs/22745782016.gif";
          break;
        case "Jazz":
          return "http://content.sportslogos.net/logos/6/234/thumbs/23467492017.gif";
          break;
        case "Wizards":
          return "http://content.sportslogos.net/logos/6/219/thumbs/21956712016.gif";
          break;
        default:
          return "https://theundefeated.com/wp-content/uploads/2017/05/nba-logo.png";
      }
    }
  },
});
