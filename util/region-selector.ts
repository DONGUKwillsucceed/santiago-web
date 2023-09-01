import { RegionDto } from "@/api/dto/user/region.dto";

export function regionSelector(region: RegionDto, locale: string) {
    if(locale === 'ko-KR') return region.name_kr;
    else if(locale === 'ja_JP') return region.name_jp;
    else if(locale === 'zh_HK') return region.name_hk;
    else if(locale === 'en_HK') return region.name_en;
    else return region.name_en;
}