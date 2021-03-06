import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.app();
  }

  //UNIX CONVERTER
  unixHour(num) {
    var sec = new Date(num * 1000);
    return sec.getHours();
  }
  //END UNIX CONVERTER

  //WORK WITH COOKIE
  getCookie(cname) {
    let name = cname + '=';
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  }
  //ENDWORK WITH COOKIE
  app() {
    var api;
    var current: number[] = [0];
    if (navigator.cookieEnabled) {
      var check = this.getCookie('api');      
      var checkprev = this.getCookie('prevsunset');
      if (check != '') {
        api = check;
        useData(JSON.parse(api));
      } else {
        console.log('%c cookie is NOT set!', 'color:red');
        fetch(
          'https://api.openweathermap.org/data/2.5/onecall?lat=37.1955948&lon=50.1529566&exclude=alerts,minutely,current&units=metric&appid=81a57d03343af64fed7d77b4fdcb7340'
        )
          .then((get) => get.json())
          .then((obj) => {
            api = {
              today: {
                dt: obj.daily[0].dt,
                sunrise: obj.daily[0].sunrise,
                sunset: obj.daily[0].sunset,
                temp: {
                  min: obj.daily[0].temp.min,
                  max: obj.daily[0].temp.max,
                },
              },
              tomorrow: {
                dt: obj.daily[1].dt,
                sunrise: obj.daily[1].sunrise,
                sunset: obj.daily[1].sunset,
                temp: {
                  min: obj.daily[1].temp.min,
                  max: obj.daily[1].temp.max,
                },
              },
              hourly: [{ dt: 0, temp: 10 }],
            };
            var expire;
            for (let hour of obj.hourly) {
              if (this.unixHour(hour.dt) == 0) {
                expire = calcExpire(hour.dt);
                api.hourly.shift();
                break;
              } else {
                api.hourly.push({ dt: hour.dt, temp: hour.temp });
              }
            }
            function calcExpire(timestamp): any {
              let current = new Date(api.today.dt * 1000);
              let cuHour = current.getHours();
              let cuMin = current.getMinutes();
              let cuSec = current.getSeconds();
              let expire = new Date(timestamp * 1000);
              let exHour = expire.getHours();
              let exMin = expire.getMinutes();
              let exSec = expire.getSeconds();
              if (
                exHour * 3600 + exMin * 60 + exSec >
                cuHour * 3600 + cuMin * 60 + cuSec
              ) {
                return (
                  exHour * 3600 +
                  exMin * 60 +
                  exSec -
                  (cuHour * 3600 + cuMin * 60 + cuSec)
                );
              } else if (
                exHour * 3600 + exMin * 60 + exSec <
                cuHour * 3600 + cuMin * 60 + cuSec
              ) {
                return (
                  cuHour * 3600 +
                  cuMin * 60 +
                  cuSec -
                  (exHour * 3600 + exMin * 60 + exSec)
                );
              }
            }
            document.cookie = `api=${JSON.stringify(api)};expires=${expire}`;
            useData(api);
          });
      }
    } else {
      alert('enable cookie!');
    }
    function $(el) {
      return document.querySelector(el);
    }

    
    console.log(current);
    function MIN(time) {
      return time[0] * 60 + Number(time[1]);
    }
    var daybreak = [24, 0];
    function DayBreak(current) {
      daybreak[0] += current[0];
      daybreak[1] = current[1];
    }
    var DayBreakFlag = false;

    async function useData(data) {
      console.log(data);
      var now = new Date();
      var temp;
      for (let hour of data.hourly) {
        var timestamp = new Date(hour.dt * 1000);
        if (now.getHours() == timestamp.getHours()) {
          temp = hour.temp;
        }
      }

      // FOR TEMP
      $('#upTemp').innerText = Math.ceil(data.today.temp['max']);
      $('#downTemp').innerText = Math.floor(data.today.temp['min']);
      $('.current-temp').innerText = `${Math.round(temp)}??C`;
      $(
        '.speedmeter__hand'
      ).style = `transform: translate(-50%,-10px) rotateZ(${
        ((Math.round(temp) + 10) * 180) / 50 + 270
      }deg);`;

      // FOR SVG
      function times(dt) {
        var time = [0];
        var objDate = new Date(dt * 1000);
        time.push(objDate.getHours());
        time.push(objDate.getMinutes());
        time.shift();
        return time;
      }
      $('#sunrise span:first-child').innerText = times(data.today.sunrise)[0];
      $('#sunrise span:last-child').innerText = times(data.today.sunrise)[1];
      $('#sunset span:first-child').innerText = times(data.today.sunset)[0];
      $('#sunset span:last-child').innerText = times(data.today.sunset)[1];

      var gold;
      var sun;
      var dark;
      var sunMoon;
      var distance =
        MIN([23, 59]) -
        MIN(times(data.today.sunset)) +
        MIN(times(data.tomorrow.sunrise));
      current.push(now.getHours());
      current.push(now.getMinutes());
      current.shift();
      if (MIN(current) >= 0 && MIN(current) <= MIN(times(data.today.sunrise))) {
        DayBreakFlag = true;
      }
      
      console.log(MIN(current));
      console.log(MIN(times(data.today.sunset)))
      if (
        MIN(current) > MIN(times(data.today.sunset)) ||
        DayBreakFlag == false
      ) {
        //OK
        console.log('Is Night!');
        //COMPLETE DAY
        $('#gold').style.strokeDashoffset = '-383';
        $('.cont-sun--moon').style.transform = 'rotate(450deg)';

        sunMoon =
          ((MIN(current) - MIN(times(data.today.sunset))) * 180) /
          (distance + 1);
        setTimeout(Night, 2000);

        function Night() {
          $('#dark').style = 'opacity:1;';
          $('#dark-pluk').style = 'display:block;';
          $('.bi-moon-stars-fill').style = 'display:block;';
          $('.bi-sun-fill').style = 'display:none;';
          dark =
            ((MIN(current) - MIN(times(data.today.sunset))) * 383) /
            (distance + 1);
          $('.cont-sun--moon').style.transform = `rotate(${sunMoon + 450}deg)`;
          $('#dark').style.strokeDashoffset = `${383 - dark}`;
        }

        $('#sunrise span:first-child').innerText = times(
          data.tomorrow.sunrise
        )[0];
        $('#sunrise span:last-child').innerText = times(
          data.tomorrow.sunrise
        )[1];
      } else if (DayBreakFlag) {
        //OK
        console.log('Day Break!');
        DayBreak(current);

        //COMPELETE DAY
        $('#gold').style.strokeDashoffset = '-383';
        $('.cont-sun--moon').style.transform = 'rotate(450deg)';
        //prevsunset
        var prevsunset;
          if (checkprev != "") {
            prevsunset=checkprev;
            dayBreakfunc(JSON.parse(prevsunset));
          } else {
            fetch(
              `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=37.1955948&lon=50.1529566&units=metric&dt=${
                (data.today.dt * 1000 - 24 * 60 * 60 * 1000) / 1000
              }&appid=81a57d03343af64fed7d77b4fdcb7340`
            )
              .then((get) => get.json())
              .then((prev) => {
                let d = new Date();
                d.setTime(d.getTime() + (12*60*60*1000));
                let expires = "expires=" + d.toUTCString();
                document.cookie=`prevsunset=${prev.current.sunset};${expires}`;
                dayBreakfunc(prev.current.sunset);
              });
          }
        function dayBreakfunc(prevsunset) {
          console.log(prevsunset);
          sunMoon =
            ((MIN(daybreak) - MIN(times(prevsunset))) * 180) / (distance + 1);
          setTimeout(Sun, 2000);
          function Sun() {
            $('#dark').style = 'opacity:1;';
            $('#dark-pluk').style = 'display:block;';
            $('.bi-moon-stars-fill').style = 'display:block;';
            $('.bi-sun-fill').style = 'display:none;';
            console.log('run');
            dark =
              ((MIN(daybreak) - MIN(times(prevsunset))) * 383) / (distance + 1);
            $('.cont-sun--moon').style.transform = `rotate(${
              sunMoon + 450
            }deg)`;
            $('#dark').style.strokeDashoffset = `${383 - dark}`;
          }
        }

        $('#sunrise span:first-child').innerText = times(data.today.sunrise)[0];
        $('#sunrise span:last-child').innerText = times(data.today.sunrise)[1];
      } else {
        //OK
        console.log('Is Day!');
        gold =
          ((MIN(current) - MIN(times(data.today.sunrise))) * 383) /
          (MIN(times(data.today.sunset)) - MIN(times(data.today.sunrise)));
        $('#gold').style.strokeDashoffset = `-${gold}`;
        sun =
          ((MIN(current) - MIN(times(data.today.sunrise))) * 180) /
          (MIN(times(data.today.sunset)) - MIN(times(data.today.sunrise)));
        $('.cont-sun--moon').style.transform = `rotate(${sun + 270}deg)`;
      }
    }
  }

  /////////////////////////////
}
