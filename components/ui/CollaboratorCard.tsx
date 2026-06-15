type Props = {
  name: string;
  role: string;
  university: string;
  email: string;
};

export default function CollaboratorCard({
  name,
  role,
  university,
  email,
}: Props) {
  return (
    <div className="rounded-lg border p-4">
      <div className="space-y-1">
        <h4 className="font-semibold">
          {name}
        </h4>

        <p className="text-sm text-muted-foreground">
          {role}
        </p>

        <p className="text-sm">
          {university}
        </p>

        <p className="text-sm">
          {email}
        </p>
      </div>
    </div>
  );
}