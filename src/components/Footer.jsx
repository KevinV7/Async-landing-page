import { profile } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="border-t-[3px] border-black bg-acid text-black">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 sm:flex-row sm:px-6">
        <p className="font-bold">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="text-sm font-semibold">
         
        </p>
      </div>
    </footer>
  )
}
