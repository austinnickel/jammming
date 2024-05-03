import React, { useEffect } from 'react';

const generateRandomString = (length) => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

const SpotifyAccessToken = ({ stateLength }) => {
  useEffect(() => {
    const clientId = '';
    const redirectUri = 'http://localhost:5173/';
    const scope = 'playlist-modify-private playlist-modify-public user-read-private';
    const responseType = 'token';
    const state = generateRandomString(stateLength)

    const queryParams = new URLSearchParams({
      client_id: clientId,
      redirect_uri: redirectUri,
      scope: scope,
      response_type: responseType,
      state: state,
    });

    const authorizeUrl = `https://accounts.spotify.com/authorize?${queryParams}`;

    // Redirect the user to the authorize URL
    window.location.href = authorizeUrl;
  }, []);

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const error = queryParams.get('error');

    if (error) {
      console.error('Authorization error:', error);
      
      return;
    }

    const accessToken = queryParams.get('access_token');
    const expiresIn = parseInt(queryParams.get('expires_in'));
    const expirationTime = new Date().getTime() + expiresIn * 1000;

    localStorage.setItem('spotifyAccessToken', accessToken);
    localStorage.setItem('spotifyTokenExpirationTime', expirationTime);

    if (expirationTime < Date.now()) {
      // Token has expired, redirect to the initial authorization URL
      const clientId = 'd90891e3a05449b5992d7c531d9a8cc1';
      const redirectUri = 'http://localhost:5173/';
      const scope = 'playlist-modify-private playlist-modify-public user-read-private';
      const responseType = 'token';
      const state = generateRandomString(stateLength)

      const queryParams = new URLSearchParams({
        client_id: clientId,
        redirect_uri: redirectUri,
        scope: scope,
        response_type: responseType,
        state: state,
      });

      const authorizeUrl = `https://accounts.spotify.com/authorize?${queryParams}`;

      window.location.href = authorizeUrl;
    } else {
      // Clear parameters from the URL to avoid potential issues
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  return (
    <div>
      <p>Redirecting to Spotify for access...</p>
    </div>
  );
};

export default SpotifyAccessToken;