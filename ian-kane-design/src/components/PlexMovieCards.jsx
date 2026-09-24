import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useFetcher } from "react-router-dom";
import useSWR from "swr";

const Plex = () => {
  const token = "6tySK2p9ZxyKAySWyyNU";
  const libraries = {
    movies: 1,
    tv_shows: 2,
    music: 3,
  };
  const privateIp = "http://192.168.0.220:32400/";
  const collectionsQuery =
    privateIp + "library/sections/" + libraries.movies + "/collections";
  const statisticsQuery = privateIp + "/statistics/media";
  const fetcher = new useFetcher();
  const { data, error, isLoading } = useSWR(statisticsQuery, fetcher);

  const [urTextKey, setUrTextKey] = useState();
  const clickHandler = (e, setUrTextKey) => {
    fetch(collectionsQuery, {
      headers: { Accept: "application/json", "X-Plex-Token": token },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network Response Failure");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        let directories = data.MediaContainer.Metadata;
        for (var i = 0; i < directories.length; i++) {
          let directory = directories[i];
          console.log(directory);
          if (directory.title === "UrText") {
            setUrTextKey(directory.key);
            console.log("UrText Set as: " + directory.key);
          }
        }
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };
  return (
    <>
      <Button
        onClick={(e) => {
          clickHandler(e, setUrTextKey);
        }}
      >
        Click here for UrText
      </Button>
    </>
  );
};

export default Plex;
