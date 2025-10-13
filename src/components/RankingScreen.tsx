import { Trophy, Award, TrendingUp, Star, Medal } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";
import { Avatar, AvatarFallback } from "./ui/avatar";

interface RankingScreenProps {
  onNavigate: (screen: string, data?: any) => void;
}

export function RankingScreen({ onNavigate }: RankingScreenProps) {
  const myStats = {
    noShowRate: 2.5,
    contributionCount: 47,
    rank: 128,
    badge: "골드 이용자",
    level: "Lv.8",
  };

  const weeklyRankings = [
    {
      rank: 1,
      name: "김**",
      noShowRate: 0,
      contributionCount: 23,
      badge: "나눔 히어로",
    },
    {
      rank: 2,
      name: "이**",
      noShowRate: 0.5,
      contributionCount: 19,
      badge: "다이아 이용자",
    },
    {
      rank: 3,
      name: "박**",
      noShowRate: 1.2,
      contributionCount: 15,
      badge: "플래티넘 이용자",
    },
    {
      rank: 4,
      name: "최**",
      noShowRate: 1.8,
      contributionCount: 12,
      badge: "골드 이용자",
    },
    {
      rank: 5,
      name: "정**",
      noShowRate: 2.1,
      contributionCount: 10,
      badge: "골드 이용자",
    },
  ];

  const monthlyRankings = [
    {
      rank: 1,
      name: "강**",
      noShowRate: 0,
      contributionCount: 89,
      badge: "나눔 레전드",
    },
    {
      rank: 2,
      name: "윤**",
      noShowRate: 0.3,
      contributionCount: 76,
      badge: "다이아 이용자",
    },
    {
      rank: 3,
      name: "조**",
      noShowRate: 0.8,
      contributionCount: 68,
      badge: "플래티넘 이용자",
    },
    {
      rank: 4,
      name: "장**",
      noShowRate: 1.5,
      contributionCount: 54,
      badge: "골드 이용자",
    },
    {
      rank: 5,
      name: "임**",
      noShowRate: 2.0,
      contributionCount: 48,
      badge: "골드 이용자",
    },
  ];

  const badges = [
    { name: "나눔 히어로", icon: "🦸", description: "노쇼율 0% 달성", earned: false },
    { name: "골드 이용자", icon: "🏆", description: "노쇼율 5% 이하", earned: true },
    { name: "빠른 반납왕", icon: "⚡", description: "50회 이상 조기 반납", earned: true },
    { name: "성실 이용자", icon: "⭐", description: "100회 이상 이용", earned: false },
    { name: "친환경 이용자", icon: "🌱", description: "대중교통 이용 50회", earned: true },
    { name: "시민 모범상", icon: "🎖️", description: "6개월 연속 우수", earned: false },
  ];

  const getRankMedal = (rank: number) => {
    if (rank === 1) return { icon: "🥇", color: "text-yellow-600" };
    if (rank === 2) return { icon: "🥈", color: "text-gray-400" };
    if (rank === 3) return { icon: "🥉", color: "text-orange-600" };
    return { icon: rank.toString(), color: "text-muted-foreground" };
  };

  return (
    <div className="flex flex-col h-full bg-gray-50">
      {/* Header */}
      <div className="bg-white px-4 pt-6 pb-4 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <button onClick={() => onNavigate("home")} className="p-1">
            <span className="text-xl">←</span>
          </button>
          <h2>기여도 & 랭킹</h2>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-20">
        {/* My Stats Card */}
        <div className="p-4">
          <Card className="p-6 bg-gradient-to-br from-blue-500 to-purple-600 text-white">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-blue-100 text-sm">나의 현재 순위</p>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-4xl">{myStats.rank}위</span>
                  <span className="text-sm text-blue-100">/ 전체</span>
                </div>
              </div>
              <Badge className="bg-white/20 text-white border-white/30">
                {myStats.level}
              </Badge>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-6">
              <div>
                <p className="text-blue-100 text-xs mb-1">노쇼율</p>
                <p className="text-2xl">{myStats.noShowRate}%</p>
              </div>
              <div>
                <p className="text-blue-100 text-xs mb-1">기여 횟수</p>
                <p className="text-2xl">{myStats.contributionCount}</p>
              </div>
              <div>
                <p className="text-blue-100 text-xs mb-1">현재 칭호</p>
                <div className="flex items-center gap-1 mt-1">
                  <Trophy className="w-4 h-4" />
                  <span className="text-xs">{myStats.badge}</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* My Contribution Details */}
        <div className="px-4 pb-4">
          <Card className="p-4">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-primary" />
              <h3>나의 기여 지표</h3>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm">노쇼율 (낮을수록 좋아요)</span>
                  <span className="text-sm text-green-600">{myStats.noShowRate}%</span>
                </div>
                <Progress value={100 - myStats.noShowRate * 10} className="h-2" />
                <p className="text-xs text-muted-foreground mt-1">
                  평균 대비 85% 우수해요 👍
                </p>
              </div>

              <div className="pt-4 border-t">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm">회전 기여 횟수</span>
                  <span className="text-sm text-blue-600">
                    {myStats.contributionCount}회
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">
                  회원님의 빠른 퇴실로 <span className="text-primary">{myStats.contributionCount}명</span>이
                  시설을 이용했어요!
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Ranking Tabs */}
        <div className="bg-white px-4 py-5">
          <h3 className="mb-4">양심 이용 랭킹</h3>
          <Tabs defaultValue="weekly">
            <TabsList className="w-full">
              <TabsTrigger value="weekly" className="flex-1">
                주간 랭킹
              </TabsTrigger>
              <TabsTrigger value="monthly" className="flex-1">
                월간 랭킹
              </TabsTrigger>
            </TabsList>

            <TabsContent value="weekly" className="mt-4">
              <div className="space-y-3">
                {weeklyRankings.map((user) => {
                  const medal = getRankMedal(user.rank);
                  return (
                    <Card key={user.rank} className="p-4">
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center text-xl ${
                            user.rank <= 3 ? "bg-yellow-50" : "bg-gray-100"
                          }`}
                        >
                          {medal.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span>{user.name}</span>
                            <Badge variant="outline" className="text-xs">
                              {user.badge}
                            </Badge>
                          </div>
                          <div className="flex gap-4 text-xs text-muted-foreground">
                            <span>노쇼율 {user.noShowRate}%</span>
                            <span>기여 {user.contributionCount}회</span>
                          </div>
                        </div>
                        {user.rank <= 3 && (
                          <Medal className="w-5 h-5 text-yellow-600" />
                        )}
                      </div>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>

            <TabsContent value="monthly" className="mt-4">
              <div className="space-y-3">
                {monthlyRankings.map((user) => {
                  const medal = getRankMedal(user.rank);
                  return (
                    <Card key={user.rank} className="p-4">
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center text-xl ${
                            user.rank <= 3 ? "bg-yellow-50" : "bg-gray-100"
                          }`}
                        >
                          {medal.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span>{user.name}</span>
                            <Badge variant="outline" className="text-xs">
                              {user.badge}
                            </Badge>
                          </div>
                          <div className="flex gap-4 text-xs text-muted-foreground">
                            <span>노쇼율 {user.noShowRate}%</span>
                            <span>기여 {user.contributionCount}회</span>
                          </div>
                        </div>
                        {user.rank <= 3 && (
                          <Medal className="w-5 h-5 text-yellow-600" />
                        )}
                      </div>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Badges & Achievements */}
        <div className="px-4 py-5 bg-white mt-4">
          <div className="flex items-center gap-2 mb-4">
            <Award className="w-5 h-5 text-primary" />
            <h3>칭호 & 배지</h3>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {badges.map((badge) => (
              <Card
                key={badge.name}
                className={`p-4 text-center ${
                  badge.earned ? "bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200" : "opacity-50"
                }`}
              >
                <div className="text-4xl mb-2">{badge.icon}</div>
                <h4 className="text-sm mb-1">{badge.name}</h4>
                <p className="text-xs text-muted-foreground">
                  {badge.description}
                </p>
                {badge.earned && (
                  <Badge variant="default" className="mt-2 text-xs">
                    획득 완료
                  </Badge>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Motivation Message */}
        <div className="px-4 py-5">
          <Card className="p-6 bg-gradient-to-br from-green-50 to-blue-50 border-green-200">
            <div className="text-center">
              <Star className="w-8 h-8 mx-auto mb-3 text-green-600" />
              <h3 className="mb-2">양심적인 이용, 감사합니다!</h3>
              <p className="text-sm text-muted-foreground">
                회원님의 성실한 이용으로 더 많은 시민이 공공시설을 편리하게
                이용할 수 있어요.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
