import { docs, meta } from "@/.source";
import { createMDXSource, resolveFiles } from 'fumadocs-mdx';
import { loader } from "fumadocs-core/source";

import { icons } from "lucide-react";
import { createElement } from "react";

export const source = loader({
    baseUrl: "/docs",
     source: {
        files: resolveFiles({ docs, meta }),
    },
    icon(icon) {
        if (!icon) { 
            return createElement(icons.Library);
        }

        if (icon in icons)
            return createElement(icons[icon as keyof typeof icons]);
        
        return undefined;
    },
});
    