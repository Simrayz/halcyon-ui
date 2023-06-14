import { Button } from '@halcyon/ui';

export default async function Index() {
  return (
    <div className="p-4">
      <div id="welcome" className="space-y-4">
        <h1 className="text-3xl">
          <span> Hello there, </span>
          Welcome to the Halcyon UI Playground 👋
        </h1>
        <div className="space-x-2">
          <Button>A primary medium button</Button>
          <Button intent="secondary" size="small">
            A secondary small button
          </Button>
          <Button size="large">A large button</Button>
        </div>
      </div>
    </div>
  );
}
