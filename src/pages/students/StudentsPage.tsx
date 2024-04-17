import { StudentsTable } from "entities/students";

export function StudentsPage() {
  return (
    <>
      <section className="p-5">
        <div>
          <StudentsTable />
        </div>
      </section>
    </>
  );
}
