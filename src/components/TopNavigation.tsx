import { CaretDownIcon } from '@radix-ui/react-icons';
import * as Menu from '@radix-ui/react-navigation-menu';
import type { CollectionEntry } from 'astro:content';

type TopNavigationProps = {
  resources: CollectionEntry<'resources'>[];
};

export default function TopNavigation({ resources }: TopNavigationProps) {
  return (
    <Menu.Root className="px-6 neutral-cta border-2 neutral-border rounded-full">
      <Menu.List className="flex items-center gap-x-4">
        <Menu.Item>
          <Menu.Link href="/" className="neutral-cta-int px-4 py-2">
            Start
          </Menu.Link>
        </Menu.Item>
        <Menu.Item>
          <Menu.Trigger className="inline-flex items-center gap-x-2 neutral-cta-int px-4 py-2">
            Resources <CaretDownIcon aria-hidden />
          </Menu.Trigger>
        </Menu.Item>
        <Menu.Item>
          <Menu.Link href="/" className="neutral-cta-int px-4 py-2">
            Schulungen
          </Menu.Link>
        </Menu.Item>
      </Menu.List>
    </Menu.Root>
  );
}
