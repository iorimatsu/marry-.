       const map = L.map('map').setView([33.560, 133.540], 11);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

        const venues = [
 { name: "ザ・ミーニッツ", lat: 33.5458, lng: 133.5615, url: "https://www.the-minutes.com/" },
 { name: "ラ・ヴィータ", lat: 33.5601, lng: 133.5350, url: "https://wedding.la-vita.co.jp/" },
{ name: "三翠園", lat: 33.5557, lng: 133.5345, url: "https://sansuien.co.jp/" },
{ name: "オワゾブルー", lat: 33.5603, lng: 133.5435, url: "https://www.oiseau-bleu.jp/" },
 { name: "ボワ・ドゥ・フェ", lat: 33.5602, lng: 133.5437, url: "https://www.boisdesfees.com/" },
{ name: "城西館", lat: 33.5585, lng: 133.5265, url: "https://www.jyoseikan.co.jp/" },
{ name: "高知サンライズホテル", lat: 33.5605, lng: 133.5365, url: "http://kochi-sunrise.com/" },
 { name: "ザ クラウンパレス新阪急高知", lat: 33.5595, lng: 133.5338, url: "https://hmi-wedding.jp/kochi/weddingplan.html" },
 { name: "セリーズ", lat: 33.5620, lng: 133.5855, url: "https://www.chres-wedding.jp/m/" },
 { name: "スイートヴィラシーンズ", lat: 33.5682, lng: 133.5755, url: "https://www.bellmony-wedding.jp/scenes/?utm_source=google&utm_medium=cpc&gad_source=1&gad_campaignid=21398493794&gclid=CjwKCAiAs4HMBhBJEiwACrfNZV-9fSwJDPbQFolO-GO8jWYRaFM-m2W3YHdFbsklh6uKU_iLTDhFcBo" },
{ name: "土佐御苑", lat: 33.56452956, lng: 133.54090917, url: "https://www.tosagyoen.co.jp/" },
{ name: "高知パレスホテル", lat: 33.5635, lng: 133.5428, url: "https://kochipalace.co.jp/" },
{ name: "サウスブリーズホテル", lat: 33.5555, lng: 133.5492, url: "http://www.sbh.co.jp/" },
{ name: "宿毛リゾート椰子の湯", lat: 32.9304, lng: 132.7095, url: "https://yashinoyu.com/" },{ name: "ネスト・ウエストガーデン土佐", lat: 33.0136, lng: 133.0033, url: "https://nest-wgt.jp/" },
 { name: "リゾートホテル海辺の果樹園", lat: 33.5365, lng: 133.7432, url: "https://www.umibenokajuen.co.jp/" },
 { name: "メルキュール高知土佐リゾート＆スパ", lat: 33.52271505, lng: 133.78550057, url: "https://mercure-kochitosa-resortandspa.jp/" },
 
        ];

        venues.forEach(v => {
            const content = `
                <div class="venue-card">
                    <strong>${v.name}</strong><br>
                   
                    <a href="${v.url}" target="_blank">HPを確認する</a>
                </div>`;
            L.marker([v.lat, v.lng]).addTo(map).bindPopup(content);
        });
