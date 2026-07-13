import { useTranslation } from 'react-i18next';
import { GitHubIcon } from '@shared/components/GitHubIcon';
import { APP_LINKS } from '@shared/constants/app.constants';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="relative border-t border-white/10 py-5 text-sm text-slate-300">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>{t('footer.copyright')}</p>
        <a
          className="inline-flex min-h-11 w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 font-semibold text-white transition hover:bg-white/15"
          href={APP_LINKS.githubRepository}
          rel="noreferrer"
          target="_blank"
        >
          <GitHubIcon label={t('footer.githubIconLabel')} />
          <span>{t('footer.githubLink')}</span>
        </a>
      </div>
    </footer>
  );
}
