const key='AIzaSyBJr6IdGrW35bu2KMeAnL832FG47b8a75s';
const BASE_URL = "https://www.googleapis.com/youtube/v3";
const key2="AIzaSyBhy7Ao1UN95IPu0J4vKtuhvUON-3RFsqo";



let videoId=sessionStorage.getItem("videoCode");


let obj={
  "kind": "youtube#videoListResponse",
  "etag": "Oeair_t7X0sTC2KZyLgdLMqdlZY",
  "items": [
      {
          "kind": "youtube#video",
          "etag": "Ta61GZRyjLp9pP_hhyMpj2ojDYc",
          "id": "d6g92XH_Doo",
          "statistics": {
              "viewCount": "32604",
              "likeCount": "1835",
              "favoriteCount": "0",
              "commentCount": "65"
          }
      }
  ],
  "pageInfo": {
      "totalResults": 1,
      "resultsPerPage": 1
  }
}


window.addEventListener("load", () => {
  if (YT) {
    new YT.Player('video-container', {
      height: '500',
      width: '1000',
      videoId,
      playerVars: {
        autoplay: 1, // 1 enables autoplay, 0 disables it
      },
    });
  }
}
);

async function getVideoStats(videoId) {
  const response = await fetch(
    `${BASE_URL}/videos?key=${key}&part=statistics&id=${videoId}`
  );
  const data = await response.json();
  console.log(videoId);
  // console.log(data);
  loaddata(obj,videoId);
   getComments(videoId);
   searchVideo("trending");
   getChanneid();
   getRel();
  //  getRelatedVideoIds(videoId,key);
    
}
getVideoStats(videoId);
async function getChanneid(){

const videoUrl = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${key}&part=snippet`;

fetch(videoUrl)
  .then(response => response.json())
  .then(data => {
    const channelID = data.items[0].snippet.channelId;

    // Step 2: Get the Channel Description using the Channel ID
    const channelUrl = `https://www.googleapis.com/youtube/v3/channels?id=${channelID}&key=${key}&part=snippet`;

    fetch(channelUrl)
      .then(response => response.json())
      .then(channelData => {
        const channelDescription = channelData.items[0].snippet.description;
        document.getElementById("channelDes").innerText=channelDescription;
      })
      .catch(error => {
        console.error('Error getting channel description:', error);
      });
  })
  .catch(error => {
    console.error('Error getting video information:', error);
  });
}

async function searchVideo(str) {
  const res = await fetch(
    `${BASE_URL}/search?key=${key}&q=${str}}&maxResults=${10}&part=snippet`
  );

  const data = await res.json();
    console.log(data);
  data.items.map((e) => {
    {
      console.log(e);
    }
  });
}

async function getRel(){
  // Set your API key


// Define the number of related videos you want to retrieve
const maxResults = 10;

// Make the API request to get related videos
fetch(`https://www.googleapis.com/youtube/v3/search?key=${key2}&relatedToVideoId=${videoId}&type=video&part=snippet&maxResults=${maxResults}`)
  .then(response => response.json())
  .then(data => {
    // Extract and print the related video IDs
    const relatedVideoIds = data.items.map(item => item.id.videoId);
    console.log(relatedVideoIds);
  })
  .catch(error => {
    console.error('Error fetching related videos:', error);
  });

}


function calculateTimeAgo(dateTime) {
  const now = new Date();
  const targetDate = new Date(dateTime);

  // Calculate the difference in milliseconds
  const timeDifference = now - targetDate;

  // Calculate years, months, weeks, days, hours, and minutes
  const yearsAgo = now.getFullYear() - targetDate.getFullYear();
  const monthsAgo = now.getMonth() - targetDate.getMonth();
  const weeksAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 7));
  const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hoursAgo = Math.floor((timeDifference / (1000 * 60 * 60) % 24));
  const minutesAgo = Math.floor((timeDifference / (1000 * 60) % 60));

  // Initialize an empty array to store time units
  const timeAgo = [];

  if (yearsAgo > 0) {
    timeAgo.push(`${yearsAgo} year${yearsAgo > 1 ? 's' : ''}`);
  } else if (monthsAgo > 0) {
    timeAgo.push(`${monthsAgo} month${monthsAgo > 1 ? 's' : ''}`);
  } else if (weeksAgo > 0) {
    timeAgo.push(`${weeksAgo} week${weeksAgo > 1 ? 's' : ''}`);
  } else if (daysAgo > 0) {
    timeAgo.push(`${daysAgo} day${daysAgo > 1 ? 's' : ''}`);
  } else if (hoursAgo > 0) {
    timeAgo.push(`${hoursAgo} hour${hoursAgo > 1 ? 's' : ''}`);
  } else if (minutesAgo > 0) {
    timeAgo.push(`${minutesAgo} minute${minutesAgo > 1 ? 's' : ''}`);
  }

  return timeAgo.join(' ');
}



// Example usage:
function getSubscount(){
      getSubscriberCount(videoId, key)
      .then(subscriberCount => {
        document.getElementById("noofsubs").innerText = subscriberCount;
      })
        .catch(error => {
          console.error('Error:', error);
        });

}




async function loaddata(obj,videoId){
  document.getElementById("videoName").innerText =
    sessionStorage.getItem("videoTitle");
  document.getElementById("noOfViews").innerText =
    sessionStorage.getItem("viewCount");
  document.getElementById("likeCount").innerText =
     obj.items[0].statistics.likeCount;
  document.getElementById("dislikeCount").innerText =
    sessionStorage.getItem("");
  document.getElementById("channelName").innerText =
    sessionStorage.getItem("channelName");
  document.getElementById("commentCount").innerText =
    obj.items[0].statistics.commentCount;
  getSubscount();
  getTimeOfUpload(videoId,key);

}



async function getFormattedVideoUploadTime(videoId, apiKey) {
  // Make a request to retrieve video details, including the upload date
  const apiUrl = `https://www.googleapis.com/youtube/v3/videos?key=${apiKey}&id=${videoId}&part=snippet`;
  
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status}`);
    }
    
    const data = await response.json();
    const uploadTime = new Date(data.items[0].snippet.publishedAt);
    
    // Format the date as "MMM d, yyyy" (e.g., "Oct 8, 2021")
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const formattedUploadTime = uploadTime.toLocaleDateString(undefined, options);
    
    return formattedUploadTime;
  } catch (error) {
    console.error('Error retrieving and formatting video upload time:', error);
    return null;
  }
}

// Example usage:
function getTimeOfUpload(videoId,apiKey){

getFormattedVideoUploadTime(videoId, apiKey)
  .then(uploadTime => {
    document.getElementById("timeOfUpload").innerText=`${uploadTime}`
  });
}




async function getComments(videoId){
  const apiUrl = `https://www.googleapis.com/youtube/v3/commentThreads?key=${key}&videoId=${videoId}&part=snippet&maxResults=50`;

// Make the request using the fetch API
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    const comments = data.items;
    comments.forEach(comment => {
     
      let userName = comment.snippet.topLevelComment.snippet.authorDisplayName;
      let userPhoto = comment.snippet.topLevelComment.snippet.authorProfileImageUrl;
      let commentText = comment.snippet.topLevelComment.snippet.textDisplay;
      let commentTime = comment.snippet.topLevelComment.snippet.publishedAt;
      let likeCount = comment.snippet.topLevelComment.snippet.likeCount;
      let dislikeCount = comment.snippet.topLevelComment.snippet.dislikeCount;
      if(likeCount===undefined)likeCount=0;
      if(dislikeCount===undefined)dislikeCount=0;
      attachComment(userName,userPhoto,commentText,commentTime,likeCount,dislikeCount);
      
    });
  })
  .catch(error => {
    console.error('Error retrieving comments:', error);
  });

}


// Set your API key and video ID


// Define the YouTube Data API endpoint


function attachComment(userName,userPhoto,comment,commentTime,likeCount,dislikeCount){

  const li=document.createElement("li");

  const timeAgo = calculateTimeAgo(commentTime);
li.innerHTML=`<img src=${userPhoto} alt=""><div class="ccr"><div ><h1>${userName}</h1><p>${timeAgo}</p></div><div class="userComment">${comment}</div><div class="ucf"><div><img src="./images/li123.svg" alt=""><p>${likeCount}</p></div><div><img src="./images/di123.svg" alt=""><p>${dislikeCount}</p></div><h2>Reply</h2></div></div>`;
li.classList='commentCards';
const commentList=document.getElementById('commentList');
commentList.append(li);


}

async function getRelatedVideoIds(VIDEO_ID, API_KEY) {
  const apiUrl = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&relatedToVideoId=${VIDEO_ID}&type=video&maxResults=10`;

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    // Process the JSON response
    const relatedVideos = data.items;

    relatedVideos.forEach((video) => {
      const videoId = video.id.videoId;
      const videoTitle = video.snippet.title;

      console.log(`Video ID: ${videoId}, Title: ${videoTitle}`);
    });
  } catch (error) {
    console.error('Error fetching related videos:', error);
  }
}



// Example usage:

// Example usage:


async function getSubscriberCount(videoId, apiKey) {
  // Step 1: Get the channel ID from the video ID
  const videoInfoUrl = `https://www.googleapis.com/youtube/v3/videos?key=${apiKey}&id=${videoId}&part=snippet`;
  const videoInfoResponse = await fetch(videoInfoUrl);
  const videoInfoData = await videoInfoResponse.json();
  const channelID = videoInfoData.items[0].snippet.channelId;

  // Step 2: Get the channel statistics (including subscriber count)
  const channelInfoUrl = `https://www.googleapis.com/youtube/v3/channels?key=${apiKey}&id=${channelID}&part=statistics`;
  const channelInfoResponse = await fetch(channelInfoUrl);
  const channelInfoData = await channelInfoResponse.json();
  const subscriberCount = channelInfoData.items[0].statistics.subscriberCount;

  return subscriberCount;
}

// Example usage:

