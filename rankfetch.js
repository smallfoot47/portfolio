fetch("https://corsproxy.io/?url=https://ctftime.org/api/v1/teams/439/")
            .then(response => response.json())
            .then(data => {
                const data2025 = data.rating["2025"];
                document.getElementById("rank_national").textContent = data2025.country_place;
                document.getElementById("rank_global").textContent = data2025.rating_place;
            })
            .catch(error => console.error("Error fetching data:", error));