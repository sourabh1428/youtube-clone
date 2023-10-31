const key = "AIzaSyD0cItI-ZMfDu0HJmR1nhyY_LsP8dyShwY";
const BASE_URL = "https://www.googleapis.com/youtube/v3";

const searchVideoInput = document.getElementById("searchVideoInput");
const searchVideoButton = document.getElementById("searchVideoButton");
const cardContainer=document.getElementById("cardContainer");


searchVideoButton.addEventListener("click", () =>
searchVideo(searchVideoInput.value));

const firstObjArray = {
    "kind": "youtube#searchListResponse",
    "etag": "1rcnQBGUTJfG6JBAEl8zO0eM4WE",
    "nextPageToken": "CDIQAA",
    "regionCode": "IN",
    "pageInfo": {
        "totalResults": 1000000,
        "resultsPerPage": 50
    },
    "items": [
        {
            "kind": "youtube#searchResult",
            "etag": "_ISMfVnScxE1VRC-x94xWcW04d0",
            "id": {
                "kind": "youtube#video",
                "videoId": "OcKrLCH5aTc"
            },
            "snippet": {
                "publishedAt": "2023-10-24T04:17:21Z",
                "channelId": "UCMrvxKTx9hLhZcOvJkYOnAw",
                "title": "M1887 VS M1014 ONLY ONE TAP CHALLENGE 😡आजा 1 vs 1 में🔥- Garena Free Fire",
                "description": "M1887 VS M1014 ONLY ONE TAP CHALLENGE आजा 1 vs 1 में  - Garena Free Fire FOLLOW ME ON INSTAGRAM ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/OcKrLCH5aTc/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/OcKrLCH5aTc/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/OcKrLCH5aTc/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "AS Gaming",
                "liveBroadcastContent": "none",
                "publishTime": "2023-10-24T04:17:21Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "TobcsUWrZzqR1ZKhl_EoeYvm9tQ",
            "id": {
                "kind": "youtube#video",
                "videoId": "V6sOq-E0OFs"
            },
            "snippet": {
                "publishedAt": "2023-10-22T06:40:31Z",
                "channelId": "UCMrvxKTx9hLhZcOvJkYOnAw",
                "title": "Tonde Gamer Vs As Gaming &amp; Piyush Joshi 2 Vs 2 Gameplay - Garena Free Fire",
                "description": "Tonde Gamer Vs As Gaming & Piyush Joshi 2 Vs 2 Gameplay - Garena Free Fire FOLLOW ME ON INSTAGRAM ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/V6sOq-E0OFs/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/V6sOq-E0OFs/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/V6sOq-E0OFs/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "AS Gaming",
                "liveBroadcastContent": "none",
                "publishTime": "2023-10-22T06:40:31Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "Ml1Ul73_7s7oQVSw0_QCvK2HZC0",
            "id": {
                "kind": "youtube#video",
                "videoId": "y9wPxI9WpIM"
            },
            "snippet": {
                "publishedAt": "2023-10-26T09:58:39Z",
                "channelId": "UCMrvxKTx9hLhZcOvJkYOnAw",
                "title": "LOKESH GAMER VS AS GAMING VS ADITECH GUN COLLECTION WAR - GARENA FREE FIRE",
                "description": "LOKESH GAMER VS AS GAMING VS ADITECH GUN COLLECTION WAR - GARENA FREE FIRE FOLLOW ME ON ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/y9wPxI9WpIM/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/y9wPxI9WpIM/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/y9wPxI9WpIM/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "AS Gaming",
                "liveBroadcastContent": "none",
                "publishTime": "2023-10-26T09:58:39Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "-d3d9AfWY4qJZlkEDyxNvbvwofA",
            "id": {
                "kind": "youtube#video",
                "videoId": "UQyjB5cc2Ns"
            },
            "snippet": {
                "publishedAt": "2023-10-28T04:05:34Z",
                "channelId": "UCMrvxKTx9hLhZcOvJkYOnAw",
                "title": "Buying Diamonds From My Brother’s Credit Card 💳 😂 Opening All New Events- Garena Free Fire",
                "description": "Buying Diamonds From My Brother's Credit Card Opening All New Events- Garena Free Fire FOLLOW ME ON ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/UQyjB5cc2Ns/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/UQyjB5cc2Ns/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/UQyjB5cc2Ns/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "AS Gaming",
                "liveBroadcastContent": "none",
                "publishTime": "2023-10-28T04:05:34Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "SMxp25eBPSSZFx71orOjjEpUZSM",
            "id": {
                "kind": "youtube#video",
                "videoId": "FHnHu3e8XCU"
            },
            "snippet": {
                "publishedAt": "2023-10-15T04:31:51Z",
                "channelId": "UCMrvxKTx9hLhZcOvJkYOnAw",
                "title": "As Gaming Vs Piyush Joshi First Time Best Clash Squad Gameplay - Garena Free Fire",
                "description": "As Gaming Vs Piyush Joshi First Time Best Clash Squad Gameplay - Garena Free Fire FOLLOW ME ON INSTAGRAM ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/FHnHu3e8XCU/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/FHnHu3e8XCU/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/FHnHu3e8XCU/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "AS Gaming",
                "liveBroadcastContent": "none",
                "publishTime": "2023-10-15T04:31:51Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "kMus_NJiR4ymgVkiFMKe76rz52o",
            "id": {
                "kind": "youtube#video",
                "videoId": "yaM1jflWF0E"
            },
            "snippet": {
                "publishedAt": "2023-09-30T04:56:39Z",
                "channelId": "UCMrvxKTx9hLhZcOvJkYOnAw",
                "title": "As Gaming Vs Tonde Gamer 😍 First Time Ever Richest Collection Versus - Garena Free Fire",
                "description": "As Gaming Vs Tonde Gamer First Time Ever Richest Collection Versus - Garena Free Fire GAME NAME - Garena Free Fire ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/yaM1jflWF0E/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/yaM1jflWF0E/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/yaM1jflWF0E/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "AS Gaming",
                "liveBroadcastContent": "none",
                "publishTime": "2023-09-30T04:56:39Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "cCapBDesJjZRBKjt1N-yiaWVCNk",
            "id": {
                "kind": "youtube#video",
                "videoId": "Hyum8N02DUI"
            },
            "snippet": {
                "publishedAt": "2023-10-08T23:38:22Z",
                "channelId": "UC0GbKJaeEN9k5CG1NLbN6Ow",
                "title": "If This Happens To You Go To The Hospital… #dangerous",
                "description": "",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/Hyum8N02DUI/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/Hyum8N02DUI/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/Hyum8N02DUI/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "IdkSterling",
                "liveBroadcastContent": "none",
                "publishTime": "2023-10-08T23:38:22Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "Dh5WHXLG-Yw7sDgMmE56fOSJtg0",
            "id": {
                "kind": "youtube#video",
                "videoId": "lhE6htsCq3Y"
            },
            "snippet": {
                "publishedAt": "2023-10-13T09:30:23Z",
                "channelId": "UCMrvxKTx9hLhZcOvJkYOnAw",
                "title": "IGNIS VS WUKONG 😨 NEW CHARECTER VS OLD 1 VS 2 CLASH SQUAD OVER POWER MATCH - GARENA FREE FIRE",
                "description": "IGNIS VS WUKONG NEW CHARECTER VS OLD 1 VS 2 CLASH SQUAD OVER POWER MATCH - GARENA FREE FIRE ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/lhE6htsCq3Y/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/lhE6htsCq3Y/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/lhE6htsCq3Y/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "AS Gaming",
                "liveBroadcastContent": "none",
                "publishTime": "2023-10-13T09:30:23Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "miD7eYuQgBOmzJegjyF4Lo1qX7k",
            "id": {
                "kind": "youtube#video",
                "videoId": "i0XApCSXLrA"
            },
            "snippet": {
                "publishedAt": "2023-07-06T08:55:54Z",
                "channelId": "UCMrvxKTx9hLhZcOvJkYOnAw",
                "title": "As Gaming With Zx10r And Mustang Gt😍 #shorts",
                "description": "As Gaming With Zx10r And Mustang Gt   #shorts.",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/i0XApCSXLrA/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/i0XApCSXLrA/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/i0XApCSXLrA/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "AS Gaming",
                "liveBroadcastContent": "none",
                "publishTime": "2023-07-06T08:55:54Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "dnr8vvD15F9ASCHtKqAM8okyLbk",
            "id": {
                "kind": "youtube#video",
                "videoId": "2_bUkov4WBg"
            },
            "snippet": {
                "publishedAt": "2023-09-27T04:51:54Z",
                "channelId": "UCMrvxKTx9hLhZcOvJkYOnAw",
                "title": "AWM VS KAR98K 😡आजा 1 vs 1 में🔥- Garena Free Fire",
                "description": "AWM VS KAR98K आजा 1 vs 1 में  - Garena Free Fire Free Fire Live Streamer From India Killing Player with LOUD ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/2_bUkov4WBg/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/2_bUkov4WBg/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/2_bUkov4WBg/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "AS Gaming",
                "liveBroadcastContent": "none",
                "publishTime": "2023-09-27T04:51:54Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "93-RiJvLPMivkqzvnkafb1pKWF0",
            "id": {
                "kind": "youtube#video",
                "videoId": "AY3Le-XbKKA"
            },
            "snippet": {
                "publishedAt": "2023-10-11T10:03:52Z",
                "channelId": "UCMrvxKTx9hLhZcOvJkYOnAw",
                "title": "As Gaming &amp; Piyush Joshi Vs As Rana 2 Vs 2 Clash Squad Gameplay - Garena Free Fire",
                "description": "As Gaming & Piyush Joshi Vs As Rana 2 Vs 2 Clash Squad Gameplay - Garena Free Fire FOLLOW ME ON INSTAGRAM ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/AY3Le-XbKKA/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/AY3Le-XbKKA/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/AY3Le-XbKKA/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "AS Gaming",
                "liveBroadcastContent": "none",
                "publishTime": "2023-10-11T10:03:52Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "qNfxzcHbOU3zjp_S3Z6vJ81zV9k",
            "id": {
                "kind": "youtube#video",
                "videoId": "Gu9jZaZ9Fq0"
            },
            "snippet": {
                "publishedAt": "2023-10-04T10:28:55Z",
                "channelId": "UCMrvxKTx9hLhZcOvJkYOnAw",
                "title": "Piyush Joshi Challenged Me &amp; Tonde Gamer In Free Fire 2 Vs 2 Clash Squad - Garena Free Fire",
                "description": "Piyush Joshi Challenged Me & Tonde Gamer In Free Fire 2 Vs 2 Clash Squad - Garena Free Fire FOLLOW ME ON ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/Gu9jZaZ9Fq0/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/Gu9jZaZ9Fq0/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/Gu9jZaZ9Fq0/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "AS Gaming",
                "liveBroadcastContent": "none",
                "publishTime": "2023-10-04T10:28:55Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "xXUBZ5DBYBOLD6bbaO0GIoSGGGc",
            "id": {
                "kind": "youtube#video",
                "videoId": "R-5Kihtk8UI"
            },
            "snippet": {
                "publishedAt": "2023-10-21T04:30:22Z",
                "channelId": "UCMrvxKTx9hLhZcOvJkYOnAw",
                "title": "Finally I Bought A Lamborghini In Car For Sale",
                "description": "Finally I Bought A Lamborghini In Car For Sale FOLLOW ME ON INSTAGRAM - https://www.instagram.com/sahilrana/ ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/R-5Kihtk8UI/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/R-5Kihtk8UI/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/R-5Kihtk8UI/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "AS Gaming",
                "liveBroadcastContent": "none",
                "publishTime": "2023-10-21T04:30:22Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "ZapsW6854TVPwI-gmcfuvoyLKAQ",
            "id": {
                "kind": "youtube#video",
                "videoId": "6FdoHbB5JdU"
            },
            "snippet": {
                "publishedAt": "2023-10-13T20:00:01Z",
                "channelId": "UCUvEpOhD1BYa6J2dPZbEtTw",
                "title": "13 Foot Jack SKELETON Caught On Security Camera Inside Our HOUSE While Playing Hide N Seek!",
                "description": "Lizzy, Canyon, and Azbuy were Hide N Seek in our house when Lizzy decided to check the security footage to see where the ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/6FdoHbB5JdU/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/6FdoHbB5JdU/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/6FdoHbB5JdU/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Tannerites",
                "liveBroadcastContent": "none",
                "publishTime": "2023-10-13T20:00:01Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "QxYUYCtmxgZgE1zV-6W9f4SNQ5M",
            "id": {
                "kind": "youtube#video",
                "videoId": "6NH28HQCys4"
            },
            "snippet": {
                "publishedAt": "2023-08-27T05:38:31Z",
                "channelId": "UCMrvxKTx9hLhZcOvJkYOnAw",
                "title": "Deleting My Brother Free Fire Id Hack Prank 😂Wasting 10,000 Diamonds Funny Moment - Garena Free Fire",
                "description": "Deleting My Brother Free Fire Id Hack Prank Wasting 10000 Diamonds Funny Moment - Garena Free Fire FOLLOW ME ON ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/6NH28HQCys4/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/6NH28HQCys4/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/6NH28HQCys4/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "AS Gaming",
                "liveBroadcastContent": "none",
                "publishTime": "2023-08-27T05:38:31Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "KI6YwAjdaJNyRiOSRC3QKPD4_k0",
            "id": {
                "kind": "youtube#video",
                "videoId": "90EKRCzK518"
            },
            "snippet": {
                "publishedAt": "2023-09-28T06:11:33Z",
                "channelId": "UCMrvxKTx9hLhZcOvJkYOnAw",
                "title": "Real Vs Fake FOOD Challenge ! *Unbelievable*😱",
                "description": "Real Vs Fake FOOD Challenge ! *Unbelievable*   FOLLOW ME ON INSTAGRAM - https://www.instagram.com/sahilrana/ ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/90EKRCzK518/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/90EKRCzK518/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/90EKRCzK518/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "AS Gaming",
                "liveBroadcastContent": "none",
                "publishTime": "2023-09-28T06:11:33Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "DKwiaHPLu-M5gPeStkip-jocO28",
            "id": {
                "kind": "youtube#video",
                "videoId": "fZoyGE030O8"
            },
            "snippet": {
                "publishedAt": "2023-10-16T04:31:01Z",
                "channelId": "UCMrvxKTx9hLhZcOvJkYOnAw",
                "title": "99% Discount In New Mystrey Shop Event 😍 - Garena Free Fire",
                "description": "99% Discount In New Mystrey Shop Event - Garena Free Fire FOLLOW ME ON INSTAGRAM ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/fZoyGE030O8/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/fZoyGE030O8/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/fZoyGE030O8/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "AS Gaming",
                "liveBroadcastContent": "none",
                "publishTime": "2023-10-16T04:31:01Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "xnfOWt562BJ7lmLfdGMToxhLhF4",
            "id": {
                "kind": "youtube#video",
                "videoId": "EPcb7qFirdU"
            },
            "snippet": {
                "publishedAt": "2023-05-22T05:58:24Z",
                "channelId": "UCMrvxKTx9hLhZcOvJkYOnAw",
                "title": "New Car Delivery 😍 #shorts",
                "description": "https://youtu.be/wNZUWICiTGA?si=epdefQ9M7_-Wpap_.",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/EPcb7qFirdU/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/EPcb7qFirdU/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/EPcb7qFirdU/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "AS Gaming",
                "liveBroadcastContent": "none",
                "publishTime": "2023-05-22T05:58:24Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "lCyt-wNTcmMh6GZSjsRHTaqaZR8",
            "id": {
                "kind": "youtube#video",
                "videoId": "cVEYQbZ5M_k"
            },
            "snippet": {
                "publishedAt": "2023-10-18T02:30:17Z",
                "channelId": "UCMrvxKTx9hLhZcOvJkYOnAw",
                "title": "India No.1 M1887 Player Challenge Me For 1 Vs 1 What Happened Next ?",
                "description": "India No.1 M1887 Player Challenge Me For 1 Vs 1 What Happened Next ? FOLLOW ME ON INSTAGRAM ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/cVEYQbZ5M_k/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/cVEYQbZ5M_k/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/cVEYQbZ5M_k/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "AS Gaming",
                "liveBroadcastContent": "none",
                "publishTime": "2023-10-18T02:30:17Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "S4T_mIq7pZC8oMY_yN0QESbbxrQ",
            "id": {
                "kind": "youtube#video",
                "videoId": "hmK3bqha22s"
            },
            "snippet": {
                "publishedAt": "2023-06-30T04:48:56Z",
                "channelId": "UCfj8ww4ohSipgXTE1y5nbMQ",
                "title": "as name stutas as letter status AS name#trending#blackscreenstatus#youtubeshorts#shorts#viral",
                "description": "as name stutas as letter status AS name#trending#blackscreenstatus#youtubeshorts#shorts#viral#trending #attitudestatus ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/hmK3bqha22s/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/hmK3bqha22s/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/hmK3bqha22s/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Dj wali",
                "liveBroadcastContent": "none",
                "publishTime": "2023-06-30T04:48:56Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "H8SOgtj0DdMz2ssVm6GwFeF_Wt4",
            "id": {
                "kind": "youtube#video",
                "videoId": "PV3nfAZPhvg"
            },
            "snippet": {
                "publishedAt": "2023-10-01T05:48:13Z",
                "channelId": "UCMrvxKTx9hLhZcOvJkYOnAw",
                "title": "Old Free Fire Youtuber 2018 Vs 2023 Searching Old Player Id - Garena Free Fire",
                "description": "As Gaming Vs Tonde Gamer First Time Ever Richest Collection Versus - Garena Free Fire FOLLOW ME ON INSTAGRAM ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/PV3nfAZPhvg/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/PV3nfAZPhvg/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/PV3nfAZPhvg/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "AS Gaming",
                "liveBroadcastContent": "none",
                "publishTime": "2023-10-01T05:48:13Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "zRXsmjuCcm0HOr5h4fyYjTt8G-o",
            "id": {
                "kind": "youtube#video",
                "videoId": "4V1AJl6ANn8"
            },
            "snippet": {
                "publishedAt": "2023-09-25T04:36:58Z",
                "channelId": "UCMrvxKTx9hLhZcOvJkYOnAw",
                "title": "Free Fire Noob To Pro Id Buying All New Event In My Brother Account - Garena Free Fire",
                "description": "Free Fire Noob To Pro Id Buying All New Event In My Brother Account - Garena Free Fire FOLLOW ME ON INSTAGRAM ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/4V1AJl6ANn8/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/4V1AJl6ANn8/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/4V1AJl6ANn8/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "AS Gaming",
                "liveBroadcastContent": "none",
                "publishTime": "2023-09-25T04:36:58Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "W6U44STuPeaBFkNvX1Qacwtvfhc",
            "id": {
                "kind": "youtube#video",
                "videoId": "e0xll-PI2bg"
            },
            "snippet": {
                "publishedAt": "2023-09-30T12:02:00Z",
                "channelId": "UCvYhgH0hXziSz9IyPztzUug",
                "title": "Eva as Wednesday Black vs Pink Challenges for kids",
                "description": "Eva as Wednesday play Black vs Pink Challenge with Barbie. Compilation video for kids 00:00 Eva as Wednesday Black vs Pink ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/e0xll-PI2bg/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/e0xll-PI2bg/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/e0xll-PI2bg/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Eva Bravo Play",
                "liveBroadcastContent": "none",
                "publishTime": "2023-09-30T12:02:00Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "RzLUyT39cDtL8whM0LG70QMVp9U",
            "id": {
                "kind": "youtube#video",
                "videoId": "QMzlwf-bS5w"
            },
            "snippet": {
                "publishedAt": "2023-07-26T05:25:43Z",
                "channelId": "UCMrvxKTx9hLhZcOvJkYOnAw",
                "title": "₹50,000 GOLGAPPA CHALLENGE | सबसे ज्यादा गोलगप्पे खाने वाले को मिलेंगे ₹50,000 रूपये |",
                "description": "50000 GOLGAPPA CHALLENGE | सबसे ज्यादा गोलगप्पे खाने वाले को मिलेंगे ₹50000 ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/QMzlwf-bS5w/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/QMzlwf-bS5w/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/QMzlwf-bS5w/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "AS Gaming",
                "liveBroadcastContent": "none",
                "publishTime": "2023-07-26T05:25:43Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "nKNOPmgw2LgsgCBt0ayjXRD9JnQ",
            "id": {
                "kind": "youtube#video",
                "videoId": "XH6aj5jZ8PI"
            },
            "snippet": {
                "publishedAt": "2023-05-14T06:02:37Z",
                "channelId": "UCk8GzjMOrta8yxDcKfylJYw",
                "title": "Diana as Wednesday and More New Stories For Girls",
                "description": "Diana as Wednesday and other new stories for girls. Video compilation 00:00 Diana play Pink vs. Black Challenge with ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/XH6aj5jZ8PI/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/XH6aj5jZ8PI/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/XH6aj5jZ8PI/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "✿ Kids Diana Show",
                "liveBroadcastContent": "none",
                "publishTime": "2023-05-14T06:02:37Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "QpLvrLsqYiFgTKenhvxqUdLaEqk",
            "id": {
                "kind": "youtube#video",
                "videoId": "eaHkDAQ6wdo"
            },
            "snippet": {
                "publishedAt": "2023-05-04T08:00:17Z",
                "channelId": "UCJplp5SjeGSdVdwsfb9Q7lQ",
                "title": "Nastya and Evelyn help each other as best friends",
                "description": "Friendship is not only fun, but also helping each other. Subscribe to Like Nastya - https://is.gd/gdv8uX Instagram ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/eaHkDAQ6wdo/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/eaHkDAQ6wdo/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/eaHkDAQ6wdo/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Like Nastya",
                "liveBroadcastContent": "none",
                "publishTime": "2023-05-04T08:00:17Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "3OgzW-ivklkLPEzcKcWTL_DjBKo",
            "id": {
                "kind": "youtube#video",
                "videoId": "0o1G-WUrisI"
            },
            "snippet": {
                "publishedAt": "2023-06-10T04:35:48Z",
                "channelId": "UCMrvxKTx9hLhZcOvJkYOnAw",
                "title": "Living In My Thar For 24 Hours Challenge | Last To Leave Wins ₹50,000",
                "description": "Living In My Thar For 24 Hours Challenge | Last To Leave Wins ₹50000 JOIN My Telegram - https://t.me/sahilranacricket ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/0o1G-WUrisI/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/0o1G-WUrisI/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/0o1G-WUrisI/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "AS Gaming",
                "liveBroadcastContent": "none",
                "publishTime": "2023-06-10T04:35:48Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "Ox_n65SYqHrNbtc9_RIMpr0Pj-w",
            "id": {
                "kind": "youtube#video",
                "videoId": "GE6Oa7jBGIY"
            },
            "snippet": {
                "publishedAt": "2023-06-14T13:53:49Z",
                "channelId": "UCfDzqmHMukbLdFPYQc5RfnQ",
                "title": "I loved this trend #as #throwback #shorts #viral",
                "description": "",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/GE6Oa7jBGIY/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/GE6Oa7jBGIY/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/GE6Oa7jBGIY/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "sara carstens",
                "liveBroadcastContent": "none",
                "publishTime": "2023-06-14T13:53:49Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "ewZDVR9mezlrZ-Uw-GWILxqKZqs",
            "id": {
                "kind": "youtube#video",
                "videoId": "qbArlc5zqOU"
            },
            "snippet": {
                "publishedAt": "2023-10-26T11:30:20Z",
                "channelId": "UCS5wKBMLOOn0l0wOSnspyZQ",
                "title": "Revenge For My Friend😡🤬 They Call Us Noob - Free Fire India￼￼",
                "description": "2nd Chanel - https://youtu.be/kwk1J-wa8zE?si=NHxiKEvRguC617db Free Fire Game From India Playing Pro Gameplay 'With ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/qbArlc5zqOU/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/qbArlc5zqOU/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/qbArlc5zqOU/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "A_S ARMY",
                "liveBroadcastContent": "none",
                "publishTime": "2023-10-26T11:30:20Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "gi-oZPhPpFUbnMCs3IGdtghJCuE",
            "id": {
                "kind": "youtube#video",
                "videoId": "b1vB8Jode-w"
            },
            "snippet": {
                "publishedAt": "2023-10-30T22:18:43Z",
                "channelId": "UCXISYK3xagaK5DHnhQ4X0hw",
                "title": "RONCERO y el BALÓN DE ORO a MESSI",
                "description": "messi #roncero #balóndeoro El subdirector de AS opina sobre el octavo Balón de Oro que ha recibido Leo Messi. Disfruta de la ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/b1vB8Jode-w/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/b1vB8Jode-w/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/b1vB8Jode-w/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Diario AS",
                "liveBroadcastContent": "none",
                "publishTime": "2023-10-30T22:18:43Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "MBJ42mhAjhOkP71PfPbIaG58ht8",
            "id": {
                "kind": "youtube#video",
                "videoId": "KcupcGaAIyk"
            },
            "snippet": {
                "publishedAt": "2023-05-26T04:30:17Z",
                "channelId": "UCMrvxKTx9hLhZcOvJkYOnAw",
                "title": "Surprising My Cute Dog With Gifts | As Gaming",
                "description": "Surprising My Cute Dog With Gifts | As Gaming FOLLOW ME ON INSTAGRAM - https://www.instagram.com/sahilrana/ ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/KcupcGaAIyk/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/KcupcGaAIyk/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/KcupcGaAIyk/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "AS Gaming",
                "liveBroadcastContent": "none",
                "publishTime": "2023-05-26T04:30:17Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "Vp1QkqHZcRDOFg7XP5YDwMcwCjg",
            "id": {
                "kind": "youtube#video",
                "videoId": "HB4FDENG4W4"
            },
            "snippet": {
                "publishedAt": "2023-10-31T04:59:23Z",
                "channelId": "UC7_rWNTq-v-kGnk3yAxJQfw",
                "title": "Devil God Reincarnated as Human boy to take His revenge || Against the gods Part 6 explain in hindi",
                "description": "squidgame #animation #moviesexplainhindi #squidgame #animation #moviesexplainhindi #squidgame #animation ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/HB4FDENG4W4/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/HB4FDENG4W4/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/HB4FDENG4W4/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Explainer Ali Omega ",
                "liveBroadcastContent": "none",
                "publishTime": "2023-10-31T04:59:23Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "T2XdPTTSZigU-P9YTV_o9NKFsCE",
            "id": {
                "kind": "youtube#video",
                "videoId": "vWuWh9Im8A4"
            },
            "snippet": {
                "publishedAt": "2023-10-31T00:10:00Z",
                "channelId": "UC-yA8YhrAgpFp4aVHRaNyMA",
                "title": "Filme de FNAF! Todas as Referências, Segredos e Mistérios!",
                "description": "SE INSCREVA: http://bit.ly/2UuijS0 NOVOS PRODUTOS: https://www.lolja.com.br/core/ VIRE MEMBRO: ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/vWuWh9Im8A4/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/vWuWh9Im8A4/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/vWuWh9Im8A4/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Core",
                "liveBroadcastContent": "none",
                "publishTime": "2023-10-31T00:10:00Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "v97A-pG61385Qcoa-4BvBWsfUO0",
            "id": {
                "kind": "youtube#video",
                "videoId": "fy1LG1X3evA"
            },
            "snippet": {
                "publishedAt": "2020-05-14T15:00:10Z",
                "channelId": "UC7X_qC_rgc3s04Aw1t5DSHg",
                "title": "George Michael, Mary J. Blige - As (Official Lyric Video)",
                "description": "George Michael, Mary J. Blige - As (Official Lyric Video) Listen on Spotify - http://smarturl.it/Greatest_Hits Listen on Apple Music ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/fy1LG1X3evA/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/fy1LG1X3evA/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/fy1LG1X3evA/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "georgemichaelVEVO",
                "liveBroadcastContent": "none",
                "publishTime": "2020-05-14T15:00:10Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "sbGdPcFdeAXP6CQleKnL-b7tnwU",
            "id": {
                "kind": "youtube#video",
                "videoId": "NXLT9S9KW7w"
            },
            "snippet": {
                "publishedAt": "2023-10-05T10:05:17Z",
                "channelId": "UCn0NUsrqao9WNBO6A-hIEOg",
                "title": "Melhores Musicas 2023 - Sertanejo 2023 Mais Tocadas - As Melhores Do Sertanejo Universitário",
                "description": "sertanejo2020 Melhores Musicas 2023 - Sertanejo 2023 Mais Tocadas - As Melhores Do Sertanejo Universitário ------ Link: ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/NXLT9S9KW7w/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/NXLT9S9KW7w/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/NXLT9S9KW7w/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Sertanejo 2020",
                "liveBroadcastContent": "none",
                "publishTime": "2023-10-05T10:05:17Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "sN6yJf9garcoM0WWt5WBcVlaQL4",
            "id": {
                "kind": "youtube#video",
                "videoId": "PfhTnou39Kk"
            },
            "snippet": {
                "publishedAt": "2023-09-17T21:11:43Z",
                "channelId": "UCgUBjMqA_IZQVFdEElvPHDA",
                "title": "ASMR Put Your Phone Down and Do As I Say 🌙🌹 (eyes closed instructions)",
                "description": "ASMR Put Your Phone Down and Do As I Say (eyes closed instructions) — My links: Spotify: ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/PfhTnou39Kk/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/PfhTnou39Kk/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/PfhTnou39Kk/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Luna Bloom ASMR",
                "liveBroadcastContent": "none",
                "publishTime": "2023-09-17T21:11:43Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "nc6_UkFbeFJenN4QwM9nBpjy0fU",
            "id": {
                "kind": "youtube#video",
                "videoId": "N7kT40FM4NU"
            },
            "snippet": {
                "publishedAt": "2023-10-18T11:01:46Z",
                "channelId": "UCqJSuIh6Ma-Za_xJgDBXMWw",
                "title": "As Mobile - Chung Kết VFL Có Gì Hot? | FREE FIRE",
                "description": "As Mobile - Chung Kết VFL Có Gì Hot? | FREE FIRE LINK DONATE: https://playerduo.com/asmobile Kênh AS Mobile Free ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/N7kT40FM4NU/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/N7kT40FM4NU/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/N7kT40FM4NU/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "AS Mobile",
                "liveBroadcastContent": "none",
                "publishTime": "2023-10-18T11:01:46Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "UJ4J8JGrF5fs4Pocrr8yDGr_hIw",
            "id": {
                "kind": "youtube#video",
                "videoId": "-0mduzpnq-0"
            },
            "snippet": {
                "publishedAt": "2023-10-21T19:41:57Z",
                "channelId": "UCXqJRS4lgSl13NarTY_sF7A",
                "title": "BNHA React Deku past[Deku as Ray]🇧🇷🇺🇸🇪🇸(Kamy-Chan)",
                "description": "Créditos: @Lilyvy https://youtu.be/irKR3SyPIZE?si=C2_eichIOllZV2gn : @ dos vídeos que eles reagiram do Tik Tok, e os links ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/-0mduzpnq-0/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/-0mduzpnq-0/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/-0mduzpnq-0/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Kamy- Chan",
                "liveBroadcastContent": "none",
                "publishTime": "2023-10-21T19:41:57Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "5NtUbspS8JrMCXRLG_hu-LnYtM8",
            "id": {
                "kind": "youtube#video",
                "videoId": "KjjmLcZcKGw"
            },
            "snippet": {
                "publishedAt": "2023-08-18T16:00:16Z",
                "channelId": "UCgW5gc9XjOMq76QjgrnMNYA",
                "title": "AS MAIS TOCADAS TIKTOK 2023 ⭐️ SELEÇÃO HITS TIK TOK 2023 ⭐️ AS TOPS DO TIKTOK | SÓ AS MELHORES 2023",
                "description": "Ouça No Spotify: https://bit.ly/3VtRDOM Lista Das Músicas: https://bit.ly/3VtRDOM ✪ Siga One Play Hits: ⤵ ◢ Youtube: ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/KjjmLcZcKGw/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/KjjmLcZcKGw/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/KjjmLcZcKGw/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "One Play Hits",
                "liveBroadcastContent": "none",
                "publishTime": "2023-08-18T16:00:16Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "PY7WNgUoDz_mwqRcGseU4fykGSc",
            "id": {
                "kind": "youtube#video",
                "videoId": "3V726_HShyY"
            },
            "snippet": {
                "publishedAt": "2010-12-20T22:45:07Z",
                "channelId": "UC7X_qC_rgc3s04Aw1t5DSHg",
                "title": "George Michael, Mary J. Blige - As (Official Video)",
                "description": "George Michael - As (Official Video) Follow on Spotify - http://smarturl.it/Greatest_Hits Listen on Apple Music ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/3V726_HShyY/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/3V726_HShyY/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/3V726_HShyY/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "georgemichaelVEVO",
                "liveBroadcastContent": "none",
                "publishTime": "2010-12-20T22:45:07Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "EBNIkHvrfjWjT1tgIDvXZ5G3F0w",
            "id": {
                "kind": "youtube#video",
                "videoId": "E7plxxOJ5sI"
            },
            "snippet": {
                "publishedAt": "2023-05-23T04:30:09Z",
                "channelId": "UCMrvxKTx9hLhZcOvJkYOnAw",
                "title": "Awm Vs M79 Clash Squad 1 Vs 1 | 10,000 Diamond 💎 Challenge As Gaming Vs As Army - Garena Free Fire",
                "description": "Awm Vs M79 Clash Squad 1 Vs 1 | 10000 Diamond Challenge As Gaming Vs As Army - Garena Free Fire FOLLOW ME ON ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/E7plxxOJ5sI/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/E7plxxOJ5sI/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/E7plxxOJ5sI/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "AS Gaming",
                "liveBroadcastContent": "none",
                "publishTime": "2023-05-23T04:30:09Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "PIXe-rxyMp82VkWOE6fbtN8Mhos",
            "id": {
                "kind": "youtube#video",
                "videoId": "EK-PrB31lUQ"
            },
            "snippet": {
                "publishedAt": "2023-06-25T04:37:55Z",
                "channelId": "UCMrvxKTx9hLhZcOvJkYOnAw",
                "title": "7 Year Brother Ask Me For 10,000 Diamonds 💎 Buying All New Events - Garena Free Fire",
                "description": "7 Year Brother Ask Me For 10000 Diamonds Buying All New Events - Garena Free Fire Subscribe For Giveaway ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/EK-PrB31lUQ/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/EK-PrB31lUQ/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/EK-PrB31lUQ/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "AS Gaming",
                "liveBroadcastContent": "none",
                "publishTime": "2023-06-25T04:37:55Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "l8NCL89F13vOtHPVNp9zBdJ5nRk",
            "id": {
                "kind": "youtube#video",
                "videoId": "ea_vkDrA0Dk"
            },
            "snippet": {
                "publishedAt": "2023-10-13T03:30:18Z",
                "channelId": "UCFSzwJllk1zpIXs2xhMZ84Q",
                "title": "AS Gaming 😮 Vs Sooneeta | FIERCE 1v1 with TOP YouTuber! Garena Free Fire",
                "description": "AS Gaming Vs Sooneeta | FIERCE 1v1 with TOP YouTuber! Garena Free Fire #asgaming #freefire #sooneeta A collab with ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/ea_vkDrA0Dk/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/ea_vkDrA0Dk/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/ea_vkDrA0Dk/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Sooneeta",
                "liveBroadcastContent": "none",
                "publishTime": "2023-10-13T03:30:18Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "Qr-q7jQXRAPH73JOjDIl574PCOM",
            "id": {
                "kind": "youtube#video",
                "videoId": "9KSLaXv3L0Y"
            },
            "snippet": {
                "publishedAt": "2023-04-08T04:30:10Z",
                "channelId": "UCMrvxKTx9hLhZcOvJkYOnAw",
                "title": "Spiciest VS Sourest Food Challenge - As Gaming",
                "description": "Spiciest VS Sourest Food Challenge - As Gaming FOLLOW ME ON INSTAGRAM - https://www.instagram.com/sahilrana/ ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/9KSLaXv3L0Y/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/9KSLaXv3L0Y/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/9KSLaXv3L0Y/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "AS Gaming",
                "liveBroadcastContent": "none",
                "publishTime": "2023-04-08T04:30:10Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "jXUUin7op4F1sHnliEopC58F624",
            "id": {
                "kind": "youtube#video",
                "videoId": "R9GbVpIiqOo"
            },
            "snippet": {
                "publishedAt": "2023-10-12T08:30:11Z",
                "channelId": "UCD5EC8IWhOFalXtePCkhJTA",
                "title": "AS Gaming Shocked 😱 New Wukong Rocked 😎 Enemy Got Knocked #shorts #freefire #tondegamer",
                "description": "Instagram: https://www.instagram.com/tondeofficial/ Discord: https://discord.gg/e8g5SyDZ4z Facebook Page: ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/R9GbVpIiqOo/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/R9GbVpIiqOo/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/R9GbVpIiqOo/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "Tonde Gamer",
                "liveBroadcastContent": "none",
                "publishTime": "2023-10-12T08:30:11Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "zqAR-L0UJQ4n1vsoCOEROo7I10M",
            "id": {
                "kind": "youtube#video",
                "videoId": "-ngiGPY31eo"
            },
            "snippet": {
                "publishedAt": "2023-06-07T05:13:32Z",
                "channelId": "UCMrvxKTx9hLhZcOvJkYOnAw",
                "title": "Mp40 Vs M1887 Bhai Vs Bhai Free Fire Clash Squad Funny Match - Garena Free Fire",
                "description": "Mp40 Vs M1887 Bhai Vs Bhai Free Fire Clash Squad Funny Match - Garena Free Fire FOLLOW ME ON INSTAGRAM ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/-ngiGPY31eo/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/-ngiGPY31eo/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/-ngiGPY31eo/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "AS Gaming",
                "liveBroadcastContent": "none",
                "publishTime": "2023-06-07T05:13:32Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "oLFw-eaqpd6drSGmY7TykO1M6uc",
            "id": {
                "kind": "youtube#video",
                "videoId": "DFvcSvFvOPM"
            },
            "snippet": {
                "publishedAt": "2023-06-14T08:00:18Z",
                "channelId": "UCMrvxKTx9hLhZcOvJkYOnAw",
                "title": "Chor Police In Free Fire Playing ( Hide &amp; Seek ) - Garena Free Fire",
                "description": "Chor Police In Free Fire Playing ( Hide & Seek ) - Garena Free Fire JOIN My Telegram Giveaway - https://t.me/sahilranacricket ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/DFvcSvFvOPM/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/DFvcSvFvOPM/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/DFvcSvFvOPM/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "AS Gaming",
                "liveBroadcastContent": "none",
                "publishTime": "2023-06-14T08:00:18Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "r3yx8V4b14WC9uE2_rcsOntqbcA",
            "id": {
                "kind": "youtube#video",
                "videoId": "WvMY_pCjDiU"
            },
            "snippet": {
                "publishedAt": "2023-10-27T06:51:23Z",
                "channelId": "UCa_i3rdR-iKCyS6DJRYiTrQ",
                "title": "Aditech Vs Lokesh Gamer &amp; As Gaming 🤯 आजा 1 Vs 2 में !! 🔥 Intence Clash Battle - Garena Free Fire",
                "description": "Aditech Vs Lokesh Gamer & As Gaming आजा 1 Vs 2 में !! Intence Clash Battle - Garena Free Fire Join this channel to ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/WvMY_pCjDiU/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/WvMY_pCjDiU/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/WvMY_pCjDiU/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "ADITECH",
                "liveBroadcastContent": "none",
                "publishTime": "2023-10-27T06:51:23Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "6-kdCpRxePTsvk6pSkQFhUGSjYM",
            "id": {
                "kind": "youtube#video",
                "videoId": "_-9Vv7moKQI"
            },
            "snippet": {
                "publishedAt": "2023-06-22T04:33:25Z",
                "channelId": "UCMrvxKTx9hLhZcOvJkYOnAw",
                "title": "I Phone 15 Challenge With My Brother 1 vs 1 Funny Gameplay - Garena Free Fire",
                "description": "I Phone 15 Challenge With My Brother 1 vs 1 Funny Gameplay - Garena Free Fire FOLLOW ME ON INSTAGRAM ...",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/_-9Vv7moKQI/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/_-9Vv7moKQI/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/_-9Vv7moKQI/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "AS Gaming",
                "liveBroadcastContent": "none",
                "publishTime": "2023-06-22T04:33:25Z"
            }
        },
        {
            "kind": "youtube#searchResult",
            "etag": "lON5-x82tgIemqzDRa-GPHqYTOk",
            "id": {
                "kind": "youtube#video",
                "videoId": "m_RfqZ91ILw"
            },
            "snippet": {
                "publishedAt": "2023-10-28T18:37:04Z",
                "channelId": "UC8Qo_TGkNFGXx8Fd_cbb1lw",
                "title": "✧PIDW react to shen qingqiu (shen jiu) as Mu qing  ✯ part 1/1 ✧ my au ✧ Angst ✧✿ Liujiu ✿ Fengqing ✿",
                "description": "",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/m_RfqZ91ILw/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/m_RfqZ91ILw/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/m_RfqZ91ILw/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "〰️Simp_for_Cale-nim〰️",
                "liveBroadcastContent": "none",
                "publishTime": "2023-10-28T18:37:04Z"
            }
        }
    ]
};
const secondObj = {
  kind: "youtube#videoListResponse",
  etag: "JPPsPCOC5OYjoVKRuyWOKLh0Hf8",
  items: [
    {
      kind: "youtube#video",
      etag: "eifFX7hWGzxDmnbLzeVGs_-DiBQ",
      id: "Amq-qlqbjYA",
      statistics: {
        viewCount: "1330912714",
        likeCount: "13295214",
        favoriteCount: "0",
        commentCount: "1658801",
      },
    },
  ],
  pageInfo: {
    totalResults: 1,
    resultsPerPage: 1,
  },
};

async function searchVideo(str) {
  const res = await fetch(
    `${BASE_URL}/search?key=${key}&q=${str}}&maxResults=${50}&part=snippet`
  );

  const data = await res.json();
    console.log(data);
  data.items.map((e) => {
    {
      formCard(e);
    }
  });
}

async function formCard(f) {
  let videoImg = f.snippet.thumbnails.medium.url;
  let videoTitle = f.snippet.title;
  let channelName = f.snippet.channelTitle;
  let a;
  
  if (f.id.videoId) {
    a = await getVideoStats(f.id.videoId);
    let channelLogo = await getChannelLogo(f.snippet.channelId);
    
    let vidId=f.id.videoId;
    let channelid=f.snippet.channelId;
    
    makeACard(vidId,channelid,videoImg,videoTitle,channelName,a,channelLogo);
}
}
function openNewPage(pageUrl) {
    // Use window.location.href to navigate to the new HTML page
    window.location.href = pageUrl;
}







function makeACard(videoCode,chanelId,videoImg,videoTitle,channelName,viewCount,channelLogo){
    const newdiv=document.createElement("div");
    newdiv.classList="myCard";
    newdiv.addEventListener("click",function(){
        
        sessionStorage.setItem("videoCode",videoCode);
        sessionStorage.setItem("channelId",chanelId);
    
        openNewPage('video.html')
    });
    newdiv.innerHTML=`<img class="mycardimg1" src=${videoImg} alt=""><div class="myCardF"><img src=${channelLogo} alt=""><div class="mcfr"><h1>${videoTitle}</h1><h2>${channelName}</h2><div><p>${viewCount} viwes</p><p>1 hour ago</p></div></div></div>`
    cardContainer.append(newdiv);
}   






async function getVideoStats(videoId) {
  const response = await fetch(
    `${BASE_URL}/videos?key=${key}&part=statistics&id=${videoId}`
  );
  const data = await response.json();
  // console.log(data);

  return data.items[0].statistics.viewCount;
}

async function getChannelLogo(channelId) {
  // https://www.googleapis.com/youtube/v3/channels?key=AIzaSyBmOfUnRNYc22e04ZmK79uRbPb6388K9AE&part=snippet&id=UC8Wd_RVw8T1O1_IWEbICkIg
  const response = await fetch(
    `${BASE_URL}/channels?key=${key}&part=snippet&id=${channelId}`
  );
  const data = await response.json();
  return data.items[0].snippet.thumbnails.medium.url;
}

//requirements

/*


thumbnail image
total duration
channel logo - video name
                -channel name
    -views -time till now



*/
// window.onload(searchVideo(""));