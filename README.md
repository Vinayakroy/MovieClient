## Tutorial: MovieClient
This project is a movie client web application that lets users explore a collection of films. It enables them to browse movie details, watch embedded trailers, and contribute or view reviews for each movie, providing an interactive platform for film enthusiasts.

## Visual Overview

## Chapters
1. Frontend Routing
2. Page Layout & Navigation
3. Main Application Controller
4. API Client
5. Movie Presentation (Hero Carousel)
6. Movie Review System
7. Trailer Playback

## Chapter 1: Frontend Routing
Welcome to the MovieClient project tutorial! In this chapter, we're going to unravel a fundamental concept in modern web development: Frontend Routing. Think of it as the internal map and GPS system for our website. It's how your browser knows what to display when you click a link or type an address.

## What Problem Does Frontend Routing Solve?
Imagine a traditional website where every time you click a link, the entire page reloads. It's like going to a new physical store by magically teleporting there, but each time you do, you have to rebuild the store from scratch! This can make web applications feel slow and clunky.

Frontend routing solves this problem by allowing us to change the content displayed on the screen without reloading the entire webpage. This creates a much smoother, faster, and more app-like experience. It's like navigating through different sections of a large store without ever leaving the building.

For our MovieClient application, this means:
  When you visit /, you see the homepage with all the movies.
  Clicking a movie's "Play Trailer" button takes you to /Trailer/:id (where :id is the movie's unique YouTube ID) to watch its trailer, without the whole page blinking.
  Clicking "Reviews" for a movie leads you to /Reviews/:id (where :id is the movie's unique IMDb ID) to read and write reviews, again, seamlessly.
  
This "internal GPS" helps the application decide which specific part (or "page") of the website to show you based on the URL in your browser's address bar.

## How Our MovieClient Uses Routing: The Basics
Our MovieClient project uses a popular library called react-router-dom to handle frontend routing. It gives us special tools (called "components" and "hooks") to define routes and navigate between them.

Let's look at the central place where our routes are defined: movie-gold-v1/src/App.js.



