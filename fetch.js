class Fetch {
    async getCurrent(input) {
      const myKey = "32cf9008b3bf8f467ec621b5f32f1954";
  
      //make request to url
  
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}`
      );
  
      const data = await response.json();
  
      console.log(data);
  
      return data;
    }
  }