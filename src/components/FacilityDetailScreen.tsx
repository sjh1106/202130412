import { MapPin, Clock, Phone, AlertCircle, TrendingUp } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";

interface FacilityDetailScreenProps {
  onNavigate: (screen: string, data?: any) => void;
  facility?: any;
}

export function FacilityDetailScreen({
  onNavigate,
  facility,
}: FacilityDetailScreenProps) {
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);
  const [selectedSeat, setSelectedSeat] = useState<string | null>(null);

  const defaultFacility = {
    name: "중앙 도서관",
    type: "도서관",
    location: "서울시 중구 세종대로 110",
    distance: "0.5km",
    noShowProbability: 85,
    waitingCount: 3,
    availableSeats: 12,
    image: "https://images.unsplash.com/photo-1674653760708-f521366e5cde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWJyYXJ5JTIwaW50ZXJpb3IlMjByZWFkaW5nfGVufDF8fHx8MTc2MDM0MDYxNnww&ixlib=rb-4.1.0&q=80&w=1080",
    hours: "09:00 - 22:00",
    phone: "02-1234-5678",
    fee: "무료",
  };

  const currentFacility = facility || defaultFacility;

  const timeSlots = [
    { time: "09:00-11:00", noShowRate: 65, available: true },
    { time: "11:00-13:00", noShowRate: 45, available: true },
    { time: "13:00-15:00", noShowRate: 55, available: true },
    { time: "15:00-17:00", noShowRate: 85, available: true },
    { time: "17:00-19:00", noShowRate: 72, available: false },
    { time: "19:00-21:00", noShowRate: 80, available: true },
  ];

  const hourlyNoShowData = [
    { hour: "09", rate: 65 },
    { hour: "11", rate: 45 },
    { hour: "13", rate: 55 },
    { hour: "15", rate: 85 },
    { hour: "17", rate: 72 },
    { hour: "19", rate: 80 },
    { hour: "21", rate: 60 },
  ];

  const seatZones = [
    { zone: "A구역", seats: ["A1", "A2", "A3", "A4"], available: 2 },
    { zone: "B구역", seats: ["B1", "B2", "B3", "B4"], available: 3 },
    { zone: "C구역", seats: ["C1", "C2", "C3", "C4"], available: 1 },
  ];

  const [waitingStep, setWaitingStep] = useState(0);

  const handleWaitingApplication = () => {
    if (waitingStep === 0) {
      setWaitingStep(1);
    } else if (waitingStep === 1) {
      setWaitingStep(2);
    } else {
      // Complete
      onNavigate("home");
    }
  };

  return (
    <div className="flex flex-col h-full bg-gray-50">
      {/* Header with Image */}
      <div className="relative">
        <ImageWithFallback
          src={currentFacility.image}
          alt={currentFacility.name}
          className="w-full h-64 object-cover"
        />
        <button
          onClick={() => onNavigate("search")}
          className="absolute top-4 left-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg"
        >
          <span className="text-xl">←</span>
        </button>
        {currentFacility.noShowProbability >= 70 && (
          <Badge
            variant="destructive"
            className="absolute top-4 right-4 bg-orange-500 text-sm px-3 py-1"
          >
            🔥 취소율 {currentFacility.noShowProbability}%
          </Badge>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-24">
        {/* Basic Info */}
        <div className="bg-white p-4">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h2>{currentFacility.name}</h2>
              <Badge variant="outline" className="mt-2">
                {currentFacility.type}
              </Badge>
            </div>
          </div>

          <div className="space-y-2 mt-4">
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="w-4 h-4 text-muted-foreground" />
              <span>{currentFacility.location}</span>
              <span className="text-muted-foreground">
                ({currentFacility.distance})
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Clock className="w-4 h-4 text-muted-foreground" />
              <span>{currentFacility.hours}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Phone className="w-4 h-4 text-muted-foreground" />
              <span>{currentFacility.phone}</span>
            </div>
          </div>

          <div className="flex items-center justify-between mt-4 pt-4 border-t">
            <div className="flex gap-4">
              <div>
                <p className="text-sm text-muted-foreground">현재 대기</p>
                <p className="text-green-600">{currentFacility.waitingCount}명</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">빈 좌석</p>
                <p className="text-blue-600">{currentFacility.availableSeats}개</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">이용 요금</p>
                <p>{currentFacility.fee}</p>
              </div>
            </div>
          </div>
        </div>

        {/* No-Show Prediction Dashboard */}
        <div className="mt-4 bg-white p-4">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-orange-500" />
            <h3>노쇼 예측 분석</h3>
          </div>

          <Card className="p-6 bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
            <div className="text-center mb-4">
              <div className="text-5xl text-orange-600 mb-2">
                {currentFacility.noShowProbability}%
              </div>
              <p className="text-sm text-muted-foreground">
                현재 시간대 취소 확률
              </p>
            </div>
            <Progress
              value={currentFacility.noShowProbability}
              className="h-2"
            />
            <p className="text-xs text-center mt-3 text-muted-foreground">
              대기 신청 시 {Math.round(currentFacility.noShowProbability * 0.8)}% 확률로 이용 가능
            </p>
          </Card>

          {/* Hourly No-Show Chart */}
          <div className="mt-6">
            <h4 className="mb-3">시간대별 취소 확률</h4>
            <div className="flex items-end justify-between gap-2 h-32">
              {hourlyNoShowData.map((data) => (
                <div key={data.hour} className="flex-1 flex flex-col items-center">
                  <div
                    className="w-full bg-orange-400 rounded-t transition-all hover:bg-orange-500"
                    style={{ height: `${data.rate}%` }}
                  ></div>
                  <span className="text-xs mt-2 text-muted-foreground">
                    {data.hour}시
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Time Slot Selection */}
        <div className="mt-4 bg-white p-4">
          <h3 className="mb-4">시간대 선택</h3>
          <div className="grid grid-cols-2 gap-3">
            {timeSlots.map((slot) => (
              <button
                key={slot.time}
                disabled={!slot.available}
                onClick={() => setSelectedTimeSlot(slot.time)}
                className={`p-3 rounded-lg border-2 transition-all ${
                  selectedTimeSlot === slot.time
                    ? "border-primary bg-primary/5"
                    : "border-border"
                } ${!slot.available ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                <div className="text-sm">{slot.time}</div>
                {slot.available ? (
                  <Badge
                    variant="outline"
                    className="mt-1 text-xs bg-orange-50 border-orange-300"
                  >
                    취소율 {slot.noShowRate}%
                  </Badge>
                ) : (
                  <Badge variant="secondary" className="mt-1 text-xs">
                    예약 마감
                  </Badge>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Seat Selection */}
        <div className="mt-4 bg-white p-4">
          <h3 className="mb-4">좌석 선택</h3>
          <Tabs defaultValue="A구역">
            <TabsList className="w-full">
              {seatZones.map((zone) => (
                <TabsTrigger key={zone.zone} value={zone.zone} className="flex-1">
                  {zone.zone}
                  <Badge variant="secondary" className="ml-2 text-xs">
                    {zone.available}
                  </Badge>
                </TabsTrigger>
              ))}
            </TabsList>
            {seatZones.map((zone) => (
              <TabsContent key={zone.zone} value={zone.zone} className="mt-4">
                <div className="grid grid-cols-4 gap-3">
                  {zone.seats.map((seat) => {
                    const isAvailable = Math.random() > 0.3;
                    return (
                      <button
                        key={seat}
                        disabled={!isAvailable}
                        onClick={() => setSelectedSeat(seat)}
                        className={`aspect-square rounded-lg border-2 flex items-center justify-center transition-all ${
                          selectedSeat === seat
                            ? "border-primary bg-primary text-primary-foreground"
                            : isAvailable
                            ? "border-border hover:border-primary/50"
                            : "border-border bg-gray-100 cursor-not-allowed"
                        }`}
                      >
                        {seat}
                      </button>
                    );
                  })}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Notice */}
        <div className="mt-4 mx-4">
          <Card className="p-4 bg-blue-50 border-blue-200">
            <div className="flex gap-3">
              <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div className="text-sm">
                <p className="text-blue-900 mb-1">대기 신청 유의사항</p>
                <ul className="text-blue-700 space-y-1 text-xs">
                  <li>• 자리 배정 알림은 5분 내 응답해야 합니다</li>
                  <li>• 미응답 시 자동으로 대기가 취소됩니다</li>
                  <li>• 노쇼 발생 시 패널티가 부여될 수 있습니다</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="fixed bottom-20 left-0 right-0 bg-white border-t p-4 shadow-lg">
        {waitingStep === 0 && (
          <Button
            className="w-full h-12"
            onClick={handleWaitingApplication}
            disabled={!selectedTimeSlot || !selectedSeat}
          >
            대기 신청하기
          </Button>
        )}
        {waitingStep === 1 && (
          <div className="space-y-3">
            <p className="text-sm text-center">
              알림 설정으로 자리 배정을 즉시 확인하세요
            </p>
            <Button className="w-full h-12" onClick={handleWaitingApplication}>
              알림 받기 설정
            </Button>
          </div>
        )}
        {waitingStep === 2 && (
          <div className="space-y-3">
            <div className="text-center">
              <div className="text-4xl mb-2">✅</div>
              <h3>대기 신청 완료!</h3>
              <p className="text-sm text-muted-foreground mt-1">
                자리가 배정되면 알림을 보내드릴게요
              </p>
            </div>
            <Button className="w-full h-12" onClick={handleWaitingApplication}>
              확인
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
