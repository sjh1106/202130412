import { Search, SlidersHorizontal, Map, List, MapPin } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface SearchScreenProps {
  onNavigate: (screen: string, data?: any) => void;
  initialType?: string;
}

export function SearchScreen({ onNavigate, initialType }: SearchScreenProps) {
  const [viewMode, setViewMode] = useState<"list" | "map">("list");
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const filters = [
    "주말 가능",
    "무료",
    "취소율 높음",
    "대기 적음",
    "신규 강좌",
  ];

  const sortOptions = ["거리순", "노쇼 확률순", "최신순", "인기순"];

  const facilities = [
    {
      id: 1,
      name: "중앙 도서관",
      type: "도서관",
      location: "서울시 중구 세종대로 110",
      distance: "0.5km",
      noShowProbability: 85,
      waitingCount: 3,
      availableSeats: 12,
      image: "https://images.unsplash.com/photo-1674653760708-f521366e5cde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWJyYXJ5JTIwaW50ZXJpb3IlMjByZWFkaW5nfGVufDF8fHx8MTc2MDM0MDYxNnww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 2,
      name: "시민 체육관",
      type: "체육시설",
      location: "서울시 강남구 테헤란로 123",
      distance: "1.2km",
      noShowProbability: 72,
      waitingCount: 5,
      availableSeats: 8,
      image: "https://images.unsplash.com/flagged/photo-1597786772028-7859f6dcb903?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBmaXRuZXNzJTIwY2VudGVyfGVufDF8fHx8MTc2MDI4MDM5NXww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 3,
      name: "문화 교육센터",
      type: "교육강좌",
      location: "서울시 마포구 월드컵로 88",
      distance: "2.1km",
      noShowProbability: 68,
      waitingCount: 8,
      availableSeats: 15,
      image: "https://images.unsplash.com/photo-1555660656-fa2fd5c2da35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc3Jvb20lMjBlZHVjYXRpb258ZW58MXx8fHwxNzYwMjU1OTUyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 4,
      name: "구립 체육센터",
      type: "체육시설",
      location: "서울시 송파구 올림픽로 240",
      distance: "3.5km",
      noShowProbability: 55,
      waitingCount: 2,
      availableSeats: 20,
      image: "https://images.unsplash.com/flagged/photo-1597786772028-7859f6dcb903?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBmaXRuZXNzJTIwY2VudGVyfGVufDF8fHx8MTc2MDI4MDM5NXww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 5,
      name: "평생학습관",
      type: "교육강좌",
      location: "서울시 서초구 반포대로 201",
      distance: "1.8km",
      noShowProbability: 80,
      waitingCount: 4,
      availableSeats: 10,
      image: "https://images.unsplash.com/photo-1555660656-fa2fd5c2da35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc3Jvb20lMjBlZHVjYXRpb258ZW58MXx8fHwxNzYwMjU1OTUyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const toggleFilter = (filter: string) => {
    setSelectedFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter]
    );
  };

  return (
    <div className="flex flex-col h-full bg-gray-50">
      {/* Header */}
      <div className="bg-white px-4 pt-6 pb-4 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <button onClick={() => onNavigate("home")} className="p-1">
            <span className="text-xl">←</span>
          </button>
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="시설 이름, 강좌 키워드 검색"
              className="pl-10 bg-input-background border-0"
            />
          </div>
        </div>

        {/* Filter Chips */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          <Button variant="outline" size="sm" className="rounded-full gap-1">
            <SlidersHorizontal className="w-4 h-4" />
            필터
          </Button>
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={selectedFilters.includes(filter) ? "default" : "outline"}
              size="sm"
              className="rounded-full whitespace-nowrap"
              onClick={() => toggleFilter(filter)}
            >
              {filter}
            </Button>
          ))}
        </div>
      </div>

      {/* Sort & View Mode */}
      <div className="bg-white px-4 py-3 flex items-center justify-between border-t">
        <div className="flex gap-2">
          {sortOptions.map((option, index) => (
            <button
              key={option}
              className={`text-sm px-3 py-1 rounded-full ${
                index === 0
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
        <div className="flex gap-1">
          <button
            onClick={() => setViewMode("list")}
            className={`p-2 rounded ${
              viewMode === "list" ? "bg-accent" : ""
            }`}
          >
            <List className="w-5 h-5" />
          </button>
          <button
            onClick={() => setViewMode("map")}
            className={`p-2 rounded ${viewMode === "map" ? "bg-accent" : ""}`}
          >
            <Map className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Results */}
      <div className="flex-1 overflow-y-auto pb-20">
        {viewMode === "list" ? (
          <div className="p-4 space-y-4">
            <p className="text-sm text-muted-foreground">
              총 {facilities.length}개의 시설
            </p>
            {facilities.map((facility) => (
              <Card
                key={facility.id}
                className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => onNavigate("detail", facility)}
              >
                <div className="relative h-40">
                  <ImageWithFallback
                    src={facility.image}
                    alt={facility.name}
                    className="w-full h-full object-cover"
                  />
                  {facility.noShowProbability >= 70 && (
                    <Badge
                      variant="destructive"
                      className="absolute top-3 right-3 bg-orange-500"
                    >
                      취소율 {facility.noShowProbability}%
                    </Badge>
                  )}
                </div>
                <div className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4>{facility.name}</h4>
                      <Badge variant="outline" className="mt-1 text-xs">
                        {facility.type}
                      </Badge>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {facility.distance}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
                    <MapPin className="w-4 h-4" />
                    <span className="text-xs">{facility.location}</span>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t">
                    <div className="flex gap-4 text-sm">
                      <span className="text-green-600">
                        현재 대기 {facility.waitingCount}명
                      </span>
                      <span className="text-blue-600">
                        빈 좌석 {facility.availableSeats}개
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <div className="text-center">
              <Map className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
              <p className="text-muted-foreground">지도 뷰</p>
              <p className="text-sm text-muted-foreground mt-2">
                시설 위치를 지도에서 확인할 수 있습니다
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
