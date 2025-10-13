import { Search, Bell, MapPin, Clock, Calendar, Award } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface MainScreenProps {
  onNavigate: (screen: string, data?: any) => void;
}

export function MainScreen({ onNavigate }: MainScreenProps) {
  const recommendedOpportunities = [
    {
      id: 1,
      facilityName: "중앙 도서관",
      type: "도서관",
      noShowProbability: 85,
      location: "서울시 중구",
      availableSlots: 3,
      timeSlot: "14:00-16:00",
    },
    {
      id: 2,
      facilityName: "시민 체육관",
      type: "체육시설",
      noShowProbability: 72,
      location: "서울시 강남구",
      availableSlots: 2,
      timeSlot: "18:00-20:00",
    },
    {
      id: 3,
      facilityName: "문화 교육센터",
      type: "교육강좌",
      noShowProbability: 68,
      location: "서울시 마포구",
      availableSlots: 5,
      timeSlot: "오늘 19:00",
    },
  ];

  const quickActions = [
    { icon: Clock, label: "대기 신청", color: "bg-blue-500" },
    { icon: Calendar, label: "내 예약", color: "bg-green-500" },
    { icon: Search, label: "시설 검색", color: "bg-purple-500" },
  ];

  const facilityTypes = [
    "전체",
    "도서관",
    "체육시설",
    "교육강좌",
    "문화센터",
    "회의실",
  ];

  return (
    <div className="flex flex-col h-full bg-gray-50">
      {/* Header */}
      <div className="bg-white px-4 pt-6 pb-4 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">서울시 강남구</span>
          </div>
          <button className="relative p-2">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="시설 이름, 강좌 키워드 검색"
            className="pl-10 bg-input-background border-0"
            onClick={() => onNavigate("search")}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto pb-20">
        {/* Personalized Recommendations */}
        <div className="px-4 py-5">
          <div className="flex items-center justify-between mb-3">
            <h3>🎯 회원님을 위한 추천 기회</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            지금 대기하면 이용 가능성이 높은 시설이에요
          </p>

          <div className="space-y-3">
            {recommendedOpportunities.map((opp) => (
              <Card
                key={opp.id}
                className="p-4 cursor-pointer hover:shadow-md transition-shadow"
                onClick={() => onNavigate("detail", opp)}
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4>{opp.facilityName}</h4>
                    <p className="text-sm text-muted-foreground">
                      {opp.location}
                    </p>
                  </div>
                  <Badge variant="destructive" className="bg-orange-500">
                    취소율 {opp.noShowProbability}%
                  </Badge>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-muted-foreground">
                      {opp.timeSlot}
                    </span>
                    <span className="text-green-600">
                      대기 {opp.availableSlots}명
                    </span>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {opp.type}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="px-4 py-5 bg-white">
          <h3 className="mb-4">빠른 이용</h3>
          <div className="grid grid-cols-3 gap-4">
            {quickActions.map((action, index) => (
              <button
                key={index}
                className="flex flex-col items-center gap-2"
                onClick={() => {
                  if (action.label === "시설 검색") onNavigate("search");
                }}
              >
                <div
                  className={`${action.color} w-14 h-14 rounded-2xl flex items-center justify-center text-white`}
                >
                  <action.icon className="w-6 h-6" />
                </div>
                <span className="text-xs text-center">{action.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Facility Types */}
        <div className="px-4 py-5">
          <h3 className="mb-4">시설 유형별 탐색</h3>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {facilityTypes.map((type, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className="rounded-full whitespace-nowrap"
                onClick={() => onNavigate("search", { type })}
              >
                {type}
              </Button>
            ))}
          </div>
        </div>

        {/* Popular Facilities */}
        <div className="px-4 py-5 bg-white">
          <div className="flex items-center justify-between mb-4">
            <h3>인기 시설</h3>
            <button className="text-sm text-primary">더보기</button>
          </div>
          <div className="space-y-3">
            {[
              {
                name: "시립 도서관",
                type: "도서관",
                distance: "1.2km",
                waiting: 5,
              },
              {
                name: "주민 체육센터",
                type: "체육시설",
                distance: "0.8km",
                waiting: 3,
              },
              {
                name: "평생교육원",
                type: "교육강좌",
                distance: "2.1km",
                waiting: 8,
              },
            ].map((facility, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-3 border-b last:border-b-0 cursor-pointer"
                onClick={() => onNavigate("detail", facility)}
              >
                <div>
                  <h4>{facility.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {facility.type} • {facility.distance}
                  </p>
                </div>
                <Badge variant="secondary">대기 {facility.waiting}명</Badge>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
