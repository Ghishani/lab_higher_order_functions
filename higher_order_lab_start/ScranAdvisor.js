const ScranAdvisor = function(restaurants){
    this.restaurants = restaurants;
}

// Add methods to prototype
ScranAdvisor.prototype.count = function(restaurants){
   return this.restaurants.length;
}

ScranAdvisor.prototype.findByName = function(restaurantName){
    return this.restaurants.find((restaurant) => restaurant.name === restaurantName);
 }

ScranAdvisor.prototype.findAllNames = function(restaurantName){
    return this.restaurants.map((restaurant) => restaurant.name)
}

ScranAdvisor.prototype.findByTown = function(restaurantTown){
    return this.restaurants.filter((restaurant) => restaurant.location.town === restaurantTown)
}

// ScranAdvisor.prototype.findByCommonCuisine = function(restaurantCuisine){
    // return this.restaurants.map((restaurant) => restaurant.cuisines)
// }
module.exports = ScranAdvisor;