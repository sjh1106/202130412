import { useState } from "react";
import { Home, Search, Clock, User } from "lucide-react";
import { MainScreen } from "./components/MainScreen";
import { SearchScreen } from "./components/SearchScreen";
import { FacilityDetailScreen } from "./components/FacilityDetailScreen";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState("home");
  const [screenData, setScreenData] = useState<any>(null);

  const handleNavigate = (screen: string, data?: any) => {
    setCurrentScreen(screen);
    setScreenData(data || null);
  };

  const bottomNavItems = [
    { id: "home", icon: Home, label: "홈" },
    { id: "search", icon: Search, label: "찾기" },
    { id: "waiting", icon: Clock, label: "대기" },
    { id: "my", icon: User, label: "마이" },
  ];

  return (
    <div className="h-screen w-full max-w-md mx-auto bg-white flex flex-col relative">
      {/* Screen Content */}
      <div className="flex-1 overflow-hidden">
        {currentScreen === "home" && <MainScreen onNavigate={handleNavigate} />}
        {currentScreen === "search" && (
          <SearchScreen onNavigate={handleNavigate} initialType={screenData?.type} />
        )}
        {currentScreen === "detail" && (
          <FacilityDetailScreen onNavigate={handleNavigate} facility={screenData} />
        )}
        {currentScreen === "waiting" && (
          <div className="h-full flex items-center justify-center bg-gray-50">
            <div className="text-center p-8">
              <Clock className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
              <h3 className="mb-2">나의 대기 현황</h3>
              <p className="text-sm text-muted-foreground">
                현재 대기 중인 예약이 없습니다
              </p>
            </div>
          </div>
        )}
        {currentScreen === "my" && (
          <div className="h-full flex items-center justify-center bg-gray-50">
            <div className="text-center p-8">
              <User className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
              <h3 className="mb-2">마이페이지</h3>
              <p className="text-sm text-muted-foreground">
                개인 정보 및 이용 내역을 확인할 수 있습니다
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      {currentScreen !== "detail" && (
        <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t shadow-lg">
          <div className="flex items-center justify-around px-2 py-3">
            {bottomNavItems.map((item) => {
              const isActive = currentScreen === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigate(item.id)}
                  className={`flex flex-col items-center gap-1 px-4 py-2 rounded-lg transition-colors ${
                    isActive
                      ? "text-primary bg-primary/5"
                      : "text-muted-foreground"
                  }`}
                >
                  <item.icon className={`w-6 h-6 ${isActive ? "" : ""}`} />
                  <span className="text-xs">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
