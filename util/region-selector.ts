import { RegionDto } from "@/api/dto/user/region.dto";

export function regionSelector(region: RegionDto, locale: string) {
    if(locale === 'ko-KR') return region.name_kr;
    else if(locale === 'ja-JP') return region.name_jp;
    else if(locale === 'zh-HK') return region.name_hk;
    else if(locale === 'en-HK') return region.name_en;
    else if(locale === 'zh-TW' || locale === 'zh-CN') return region.name_ch;
    else if(locale === 'fr-FR') return region.name_fr;
    else if(locale === 'it-IT') return region.name_ge;
    else if(locale === 'vi-VN') return region.name_it;
    else if(locale === 'de-DE') return region.name_vi;

    else return region.name_en;
}