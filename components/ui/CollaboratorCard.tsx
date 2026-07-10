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
    <div className="glass-panel rounded-[24px] p-5">
      <div className="space-y-2">
        <h4 className="font-semibold">
          {name}
        </h4>

        <p className="text-sm text-muted-foreground/90">
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