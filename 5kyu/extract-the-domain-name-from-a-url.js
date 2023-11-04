// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

// My solution

function domainName(url){
    return url.match(/(?:https?)?[\.:\/]*(?:www.)?([A-z0-9-_]*)/i)[1];
}