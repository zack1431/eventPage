var events = [
    {
        event_no:1,
        event_name: 'Sun Burn',
        available_seats: 20,
        event_img: 'images/event.jpg'
    },
    {
        event_no:2,
        event_name: 'Concert',
        available_seats: 20,
        event_img: 'images/event.jpg'
    },
    {
        event_no:3,
        event_name: 'Other',
        available_seats: 20,
        event_img: 'images/event.jpg'
    },
    {
        event_no:4,
        event_name: 'Entertainment',
        available_seats: 20,
        event_img: 'images/event.jpg'
    },
    {
        event_no:5,
        event_name: 'Sports',
        available_seats: 20,
        event_img: 'images/event.jpg'
    },
    {
        event_no:6,
        event_name: 'ABC',
        available_seats: 20,
        event_img: 'images/event.jpg'
    },
    {
        event_no:7,
        event_name: 'DC',
        available_seats: 20,
        event_img: 'images/event.jpg'
    },
    {
        event_no:8,
        event_name: 'Marvel',
        available_seats: 0,
        event_img: 'images/event.jpg'
    }
]

let div,all;

var copyEvents = events;
function searchEvent(){
    var text = document.getElementById('eventSearch');
    if(text.value != '' && text.value.trim()){
        //search this event
       events = this.copyEvents.filter((item) => {
            return (item.event_name.toLowerCase().indexOf(text.value.toLowerCase()) > -1)
          })
          var temp = document.querySelector('.newcss');
          temp.innerHTML = ''; 
        allEvents();
    }
    else
    {
        var temp = document.querySelector('.newcss');
        temp.innerHTML = ''; 
        events = copyEvents;
        allEvents();
    }
}



function allEvents(){
    events.forEach(val =>{
      var temp = document.querySelector('.newcss');
      all = `<div class='card-content' id='e${val.event_no}'><h2>Event No. ${val.event_no}</h2><div class='card-img'><img src='${val.event_img}'></div> `
       all +=`<div class='info'><p>${val.event_name}</p><p>Available Seats: ${val.available_seats}</p>`;
        if(val.available_seats == 0){
            all += `<button class='btn'>Sold out</button></div> </div>`
        }
        else
        {
            all += `<button class='btn'>Book Now</button></div> </div>`
        }
        temp.innerHTML += all;

        
    })

}
allEvents();

    
    // document.body.append(ul)
    // console.log(ul);