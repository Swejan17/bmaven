
const express = require("express");
var cors = require('cors')
var app = express()

var offers = require("./offers.json")
var services = require("./services.json")
const Fuse = require('fuse.js');

app.use(cors())

const fuseOptions = {
	// isCaseSensitive: false,
	includeScore: true,
	shouldSort: true,
	// includeMatches: false,
	// findAllMatches: false,
	// minMatchCharLength: 1,
	// location: 0,
	threshold: 0.95,
	// distance: 100,
	// useExtendedSearch: false,
	// ignoreLocation: false,
	// ignoreFieldNorm: false,
	// fieldNormWeight: 1,
	keys: [
		"name",
        "desc"
	]
};


app.get("/business/dash/data", (req, res) => {
    res.status(200).send({
        offers, services, stats: {
            views: 20,
            avgRating: 4.5,
            revenue: 7000,
            viewGraph: [6,8.7,8,8.7,8,8.7,8.7,8,8.7,8,8.7,8,7,8.9,8.7,8,8.7,8,8.7,5]
        }
    });
})
app.get("/business/sign", (req, res)=>{
    res.status(200).send({message: "done"});
})
app.get("/user/sign", (req, res)=>{
    res.status(200).send({
        userName: "Rohan Arava",
        userId: "rohan_arava",
        collections: [
            {
                name: "Daenerys's wedding",
                items: [
                    { id: 1, name: "Little Finger Pastries", image: "https://i.pinimg.com/564x/fb/98/f7/fb98f79c1b4180a03d5262c881390a03.jpg" },
                    { id: 2, name: "Stark Kitchen", image: "https://i.pinimg.com/474x/ea/24/62/ea2462428d2baa42a96d484c062a0743.jpg" },
                    { id: 1, name: "Snow Tailors", image: "https://i.pinimg.com/564x/89/66/1c/89661c6535d7d9c49b19b034151afd1f.jpg" },
                ],
        
            },
            {
                name: "Three Eyed Raven",
                items: [
                    { id: 2, name: "Stark Kitchen", image: "https://i.pinimg.com/474x/ea/24/62/ea2462428d2baa42a96d484c062a0743.jpg" },
                    { id: 1, name: "Little Finger Pastries", image: "https://i.pinimg.com/564x/fb/98/f7/fb98f79c1b4180a03d5262c881390a03.jpg" },
                    { id: 1, name: "Snow Tailors", image: "https://i.pinimg.com/564x/89/66/1c/89661c6535d7d9c49b19b034151afd1f.jpg" },
                ],
        
            },
            {
                name: "Drogon's Birthday",
                items: [
                    { id: 1, name: "Snow Tailors", image: "https://i.pinimg.com/564x/89/66/1c/89661c6535d7d9c49b19b034151afd1f.jpg" },
                    { id: 2, name: "Stark Kitchen", image: "https://i.pinimg.com/474x/ea/24/62/ea2462428d2baa42a96d484c062a0743.jpg" },
                    { id: 1, name: "Little Finger Pastries", image: "https://i.pinimg.com/564x/fb/98/f7/fb98f79c1b4180a03d5262c881390a03.jpg" },
                    
                ],
        
            },
            {
                name: "Sansa's Coronation",
                items: [
                    { id: 1, name: "Snow Tailors", image: "https://i.pinimg.com/564x/89/66/1c/89661c6535d7d9c49b19b034151afd1f.jpg" },
                    { id: 1, name: "Little Finger Pastries", image: "https://i.pinimg.com/564x/fb/98/f7/fb98f79c1b4180a03d5262c881390a03.jpg" },
                    { id: 2, name: "Stark Kitchen", image: "https://i.pinimg.com/474x/ea/24/62/ea2462428d2baa42a96d484c062a0743.jpg" },
                ],
        
            },
            {
                name: "Welcome Back Arya",
                items: [
                    { id: 2, name: "Stark Kitchen", image: "https://i.pinimg.com/474x/ea/24/62/ea2462428d2baa42a96d484c062a0743.jpg" },
                    { id: 1, name: "Little Finger Pastries", image: "https://i.pinimg.com/564x/fb/98/f7/fb98f79c1b4180a03d5262c881390a03.jpg" },
                    { id: 1, name: "Snow Tailors", image: "https://i.pinimg.com/564x/89/66/1c/89661c6535d7d9c49b19b034151afd1f.jpg" },
                ],
        
            },
            {
                name: "Trip to Braavos",
                items: [
                    { id: 1, name: "Snow Tailors", image: "https://i.pinimg.com/564x/89/66/1c/89661c6535d7d9c49b19b034151afd1f.jpg" },
                    { id: 2, name: "Stark Kitchen", image: "https://i.pinimg.com/474x/ea/24/62/ea2462428d2baa42a96d484c062a0743.jpg" },
                    { id: 1, name: "Little Finger Pastries", image: "https://i.pinimg.com/564x/fb/98/f7/fb98f79c1b4180a03d5262c881390a03.jpg" },
                    
                ],
            },
        ],
        history:[
            {
                name: "Wedding Cake | 3 Floor | Bride and Groom",
                serviceName: "Little Finger Pastries",
                servicePrice: "Rs. 1000",
                serviceTime: "12/12/2020 10:00 AM",
                paymentMethod: "UPI",
                paymentId: "rohan.a21@sbi.upi123",
                description: "Order was delivered at 10:00 AM on 12/12/2020 to a Mr.Snow at St.Sistine's Chapel"
            },
            {
                name: "Shepherd's Pie for 300",
                serviceName: "Stark Kitchen",
                servicePrice: "Rs. 25000",
                serviceTime: "12/12/2020 12:00 PM",
                paymentMethod: "UPI",
                paymentId: "rohan.a21@sbi.upi123",
                description: "Order was delivered at 10:00 AM on 12/12/2020 to a Mr.Snow at St.Sistine's Chapel"
            },
            {
                name: "A Tuxedo",
                serviceName: "Snow Tailors",
                servicePrice: "Rs. 17000",
                serviceTime: "11/12/2020 12:00 PM",
                paymentMethod: "UPI",
                paymentId: "rohan.a21@sbi.upi123",
                description: "Order was delivered at 10:00 AM on 12/12/2020 to a Mr.Snow at St.Sistine's Chapel"
            },
        ]
    })
});

app.get("/user/search/default", (req, res)=>{ 
    
    res.status(200).send({
        services
    });
});

app.get("/user/search", (req, res)=>{
    const query = req.query.q;
    const fuse = new Fuse(services, fuseOptions);
    const result = fuse.search(query)
    console.log(result)
    res.status(200).send({services: result.filter((item)=>item.score<=0.3).map((item)=>item.item)});
});

app.get("/service/:id", (req, res)=>{
    const id = req.params.id;
    const result = services.filter((item)=>item.id===parseInt(id))
    if(result.length === 0){
        res.status(404).send({error: "Not Found"});
    }
    res.status(200).send({service: result[0]});
});

app.listen(8085, (err) => {
    if (err) console.log("error", err);
    else console.log("listening on 8085");

});

