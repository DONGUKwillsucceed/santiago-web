import { RegionDto } from "@/api/dto/user/region.dto";

export function findRegionId(locale: string) {
    if(locale === 'ko-KR') return "0bcbbb91-89bd-48f7-9562-ec662b6fd3a2";
    else if(locale === 'ja-JP') return "9575b497-f677-4b4a-94fa-1de79763e035";
    else if(locale === 'zh-HK') return "9575b497-f677-4b4a-94fa-1de79763e035";
    else if(locale === 'en-HK') return "9575b497-f677-4b4a-94fa-1de79763e035";
    else if(locale === 'en-UK') return "7d266a33-a576-4db5-95fd-d33cc7e5accc";
    else if(locale === 'zh-TW' || locale === 'zh-CN') return "9575b497-f677-4b4a-94fa-1de79763e035";
    else if(locale === 'fr-FR') return "9575b497-f677-4b4a-94fa-1de79763e035";
    else if(locale === 'it-IT') return "9575b497-f677-4b4a-94fa-1de79763e035";
    else if(locale === 'vi-VN') return "9575b497-f677-4b4a-94fa-1de79763e035";
    else if(locale === 'de-DE') return "9575b497-f677-4b4a-94fa-1de79763e035";

    else return "9575b497-f677-4b4a-94fa-1de79763e035";
}