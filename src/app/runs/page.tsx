import MainLayout from "src/components/main-layout";
import Title from "src/components/title";
import { getActivities } from "src/processor/strava";

export const revalidate = 3600; // revalidate every hour

export default async function RunsPage() {
  const activities = await getActivities();

  return (
    <MainLayout>
    <Title>runs</Title>
    <div className="py-4">
      <p className="text-xs">Raw data</p>
      <p className="text-xs opacity-40">{JSON.stringify(activities, null, 2)}</p>
    </div>
    <div>
      <ul>
        {activities.map((activity:any) => (
          <li key={activity.id}>
            <strong>{activity.start_date.split("T")[0]}</strong> {activity.distance}m
          </li>
        ))}
      </ul>
    </div>
    </MainLayout>
  );
}
