/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { BlogData } from "./data.server/blog";
import { DocsData, DocsTemplate } from "./data.server/docs";
import { HeadingData, PageNavigation, TableOfContents } from "@stencil/ssg";
export namespace Components {
    interface AnchorLink {
        "to": string;
    }
    interface AppMenuToggle {
        "icon": string;
    }
    interface AvcCodeType {
        "typeId": string;
    }
    interface BlogPage {
        "data": { pages: BlogData[] };
    }
    interface BlogPost {
        "data": BlogData;
    }
    interface CapacitorCommunity {
    }
    interface CapacitorEnterprise {
    }
    interface CapacitorHubspotForm {
        "ajax": boolean;
        "formId"?: string;
        "goToWebinarKey"?: string;
        "portalId": string;
    }
    interface CapacitorSite {
    }
    interface CapacitorSiteFooter {
    }
    interface CapacitorSiteHeader {
    }
    interface CodeSnippet {
        "code": string;
        "language": string;
    }
    interface ContributorList {
        "contributors": string[];
    }
    interface CordovaLandingPage {
    }
    interface DocSnippet {
    }
    interface DocsComponent {
        "data": DocsData;
    }
    interface DocsHeader {
        "template": DocsTemplate;
    }
    interface DocsMenu {
        "template": DocsTemplate;
        "toc": TableOfContents;
        "toggleOverlayMenu": () => Promise<void>;
    }
    interface DocsSearch {
    }
    interface InPageNavigation {
        "headings": HeadingData[];
        "repoFileUrl": string;
    }
    interface LandingPage {
        "data": any;
    }
    interface LowerContentNav {
        "navigation": PageNavigation;
    }
    interface MoreButton {
        "icon": string;
    }
    interface NewsletterSignup {
    }
    interface PluginApi {
        "api": string;
        "index": boolean;
        "name": string;
    }
    interface PluginApiIndex {
        "api": string;
        "index": boolean;
        "name": string;
    }
    interface PluginPlatforms {
        "platforms": string;
    }
    interface PreFooter {
    }
    interface SiteBackdrop {
        "visible": boolean;
    }
    interface SolutionPage {
        "solutionId": string;
    }
    interface VersionSelect {
    }
}
declare global {
    interface HTMLAnchorLinkElement extends Components.AnchorLink, HTMLStencilElement {
    }
    var HTMLAnchorLinkElement: {
        prototype: HTMLAnchorLinkElement;
        new (): HTMLAnchorLinkElement;
    };
    interface HTMLAppMenuToggleElement extends Components.AppMenuToggle, HTMLStencilElement {
    }
    var HTMLAppMenuToggleElement: {
        prototype: HTMLAppMenuToggleElement;
        new (): HTMLAppMenuToggleElement;
    };
    interface HTMLAvcCodeTypeElement extends Components.AvcCodeType, HTMLStencilElement {
    }
    var HTMLAvcCodeTypeElement: {
        prototype: HTMLAvcCodeTypeElement;
        new (): HTMLAvcCodeTypeElement;
    };
    interface HTMLBlogPageElement extends Components.BlogPage, HTMLStencilElement {
    }
    var HTMLBlogPageElement: {
        prototype: HTMLBlogPageElement;
        new (): HTMLBlogPageElement;
    };
    interface HTMLBlogPostElement extends Components.BlogPost, HTMLStencilElement {
    }
    var HTMLBlogPostElement: {
        prototype: HTMLBlogPostElement;
        new (): HTMLBlogPostElement;
    };
    interface HTMLCapacitorCommunityElement extends Components.CapacitorCommunity, HTMLStencilElement {
    }
    var HTMLCapacitorCommunityElement: {
        prototype: HTMLCapacitorCommunityElement;
        new (): HTMLCapacitorCommunityElement;
    };
    interface HTMLCapacitorEnterpriseElement extends Components.CapacitorEnterprise, HTMLStencilElement {
    }
    var HTMLCapacitorEnterpriseElement: {
        prototype: HTMLCapacitorEnterpriseElement;
        new (): HTMLCapacitorEnterpriseElement;
    };
    interface HTMLCapacitorHubspotFormElement extends Components.CapacitorHubspotForm, HTMLStencilElement {
    }
    var HTMLCapacitorHubspotFormElement: {
        prototype: HTMLCapacitorHubspotFormElement;
        new (): HTMLCapacitorHubspotFormElement;
    };
    interface HTMLCapacitorSiteElement extends Components.CapacitorSite, HTMLStencilElement {
    }
    var HTMLCapacitorSiteElement: {
        prototype: HTMLCapacitorSiteElement;
        new (): HTMLCapacitorSiteElement;
    };
    interface HTMLCapacitorSiteFooterElement extends Components.CapacitorSiteFooter, HTMLStencilElement {
    }
    var HTMLCapacitorSiteFooterElement: {
        prototype: HTMLCapacitorSiteFooterElement;
        new (): HTMLCapacitorSiteFooterElement;
    };
    interface HTMLCapacitorSiteHeaderElement extends Components.CapacitorSiteHeader, HTMLStencilElement {
    }
    var HTMLCapacitorSiteHeaderElement: {
        prototype: HTMLCapacitorSiteHeaderElement;
        new (): HTMLCapacitorSiteHeaderElement;
    };
    interface HTMLCodeSnippetElement extends Components.CodeSnippet, HTMLStencilElement {
    }
    var HTMLCodeSnippetElement: {
        prototype: HTMLCodeSnippetElement;
        new (): HTMLCodeSnippetElement;
    };
    interface HTMLContributorListElement extends Components.ContributorList, HTMLStencilElement {
    }
    var HTMLContributorListElement: {
        prototype: HTMLContributorListElement;
        new (): HTMLContributorListElement;
    };
    interface HTMLCordovaLandingPageElement extends Components.CordovaLandingPage, HTMLStencilElement {
    }
    var HTMLCordovaLandingPageElement: {
        prototype: HTMLCordovaLandingPageElement;
        new (): HTMLCordovaLandingPageElement;
    };
    interface HTMLDocSnippetElement extends Components.DocSnippet, HTMLStencilElement {
    }
    var HTMLDocSnippetElement: {
        prototype: HTMLDocSnippetElement;
        new (): HTMLDocSnippetElement;
    };
    interface HTMLDocsComponentElement extends Components.DocsComponent, HTMLStencilElement {
    }
    var HTMLDocsComponentElement: {
        prototype: HTMLDocsComponentElement;
        new (): HTMLDocsComponentElement;
    };
    interface HTMLDocsHeaderElement extends Components.DocsHeader, HTMLStencilElement {
    }
    var HTMLDocsHeaderElement: {
        prototype: HTMLDocsHeaderElement;
        new (): HTMLDocsHeaderElement;
    };
    interface HTMLDocsMenuElement extends Components.DocsMenu, HTMLStencilElement {
    }
    var HTMLDocsMenuElement: {
        prototype: HTMLDocsMenuElement;
        new (): HTMLDocsMenuElement;
    };
    interface HTMLDocsSearchElement extends Components.DocsSearch, HTMLStencilElement {
    }
    var HTMLDocsSearchElement: {
        prototype: HTMLDocsSearchElement;
        new (): HTMLDocsSearchElement;
    };
    interface HTMLInPageNavigationElement extends Components.InPageNavigation, HTMLStencilElement {
    }
    var HTMLInPageNavigationElement: {
        prototype: HTMLInPageNavigationElement;
        new (): HTMLInPageNavigationElement;
    };
    interface HTMLLandingPageElement extends Components.LandingPage, HTMLStencilElement {
    }
    var HTMLLandingPageElement: {
        prototype: HTMLLandingPageElement;
        new (): HTMLLandingPageElement;
    };
    interface HTMLLowerContentNavElement extends Components.LowerContentNav, HTMLStencilElement {
    }
    var HTMLLowerContentNavElement: {
        prototype: HTMLLowerContentNavElement;
        new (): HTMLLowerContentNavElement;
    };
    interface HTMLMoreButtonElement extends Components.MoreButton, HTMLStencilElement {
    }
    var HTMLMoreButtonElement: {
        prototype: HTMLMoreButtonElement;
        new (): HTMLMoreButtonElement;
    };
    interface HTMLNewsletterSignupElement extends Components.NewsletterSignup, HTMLStencilElement {
    }
    var HTMLNewsletterSignupElement: {
        prototype: HTMLNewsletterSignupElement;
        new (): HTMLNewsletterSignupElement;
    };
    interface HTMLPluginApiElement extends Components.PluginApi, HTMLStencilElement {
    }
    var HTMLPluginApiElement: {
        prototype: HTMLPluginApiElement;
        new (): HTMLPluginApiElement;
    };
    interface HTMLPluginApiIndexElement extends Components.PluginApiIndex, HTMLStencilElement {
    }
    var HTMLPluginApiIndexElement: {
        prototype: HTMLPluginApiIndexElement;
        new (): HTMLPluginApiIndexElement;
    };
    interface HTMLPluginPlatformsElement extends Components.PluginPlatforms, HTMLStencilElement {
    }
    var HTMLPluginPlatformsElement: {
        prototype: HTMLPluginPlatformsElement;
        new (): HTMLPluginPlatformsElement;
    };
    interface HTMLPreFooterElement extends Components.PreFooter, HTMLStencilElement {
    }
    var HTMLPreFooterElement: {
        prototype: HTMLPreFooterElement;
        new (): HTMLPreFooterElement;
    };
    interface HTMLSiteBackdropElement extends Components.SiteBackdrop, HTMLStencilElement {
    }
    var HTMLSiteBackdropElement: {
        prototype: HTMLSiteBackdropElement;
        new (): HTMLSiteBackdropElement;
    };
    interface HTMLSolutionPageElement extends Components.SolutionPage, HTMLStencilElement {
    }
    var HTMLSolutionPageElement: {
        prototype: HTMLSolutionPageElement;
        new (): HTMLSolutionPageElement;
    };
    interface HTMLVersionSelectElement extends Components.VersionSelect, HTMLStencilElement {
    }
    var HTMLVersionSelectElement: {
        prototype: HTMLVersionSelectElement;
        new (): HTMLVersionSelectElement;
    };
    interface HTMLElementTagNameMap {
        "anchor-link": HTMLAnchorLinkElement;
        "app-menu-toggle": HTMLAppMenuToggleElement;
        "avc-code-type": HTMLAvcCodeTypeElement;
        "blog-page": HTMLBlogPageElement;
        "blog-post": HTMLBlogPostElement;
        "capacitor-community": HTMLCapacitorCommunityElement;
        "capacitor-enterprise": HTMLCapacitorEnterpriseElement;
        "capacitor-hubspot-form": HTMLCapacitorHubspotFormElement;
        "capacitor-site": HTMLCapacitorSiteElement;
        "capacitor-site-footer": HTMLCapacitorSiteFooterElement;
        "capacitor-site-header": HTMLCapacitorSiteHeaderElement;
        "code-snippet": HTMLCodeSnippetElement;
        "contributor-list": HTMLContributorListElement;
        "cordova-landing-page": HTMLCordovaLandingPageElement;
        "doc-snippet": HTMLDocSnippetElement;
        "docs-component": HTMLDocsComponentElement;
        "docs-header": HTMLDocsHeaderElement;
        "docs-menu": HTMLDocsMenuElement;
        "docs-search": HTMLDocsSearchElement;
        "in-page-navigation": HTMLInPageNavigationElement;
        "landing-page": HTMLLandingPageElement;
        "lower-content-nav": HTMLLowerContentNavElement;
        "more-button": HTMLMoreButtonElement;
        "newsletter-signup": HTMLNewsletterSignupElement;
        "plugin-api": HTMLPluginApiElement;
        "plugin-api-index": HTMLPluginApiIndexElement;
        "plugin-platforms": HTMLPluginPlatformsElement;
        "pre-footer": HTMLPreFooterElement;
        "site-backdrop": HTMLSiteBackdropElement;
        "solution-page": HTMLSolutionPageElement;
        "version-select": HTMLVersionSelectElement;
    }
}
declare namespace LocalJSX {
    interface AnchorLink {
        "to"?: string;
    }
    interface AppMenuToggle {
        "icon"?: string;
        "onMenuToggleClick"?: (event: CustomEvent<any>) => void;
    }
    interface AvcCodeType {
        "typeId"?: string;
    }
    interface BlogPage {
        "data"?: { pages: BlogData[] };
    }
    interface BlogPost {
        "data"?: BlogData;
    }
    interface CapacitorCommunity {
    }
    interface CapacitorEnterprise {
    }
    interface CapacitorHubspotForm {
        "ajax"?: boolean;
        "formId"?: string;
        "goToWebinarKey"?: string;
        "onFormSubmitted"?: (event: CustomEvent<any>) => void;
        "portalId"?: string;
    }
    interface CapacitorSite {
    }
    interface CapacitorSiteFooter {
    }
    interface CapacitorSiteHeader {
    }
    interface CodeSnippet {
        "code"?: string;
        "language"?: string;
    }
    interface ContributorList {
        "contributors"?: string[];
    }
    interface CordovaLandingPage {
    }
    interface DocSnippet {
    }
    interface DocsComponent {
        "data"?: DocsData;
    }
    interface DocsHeader {
        "template"?: DocsTemplate;
    }
    interface DocsMenu {
        "onMenuToggled"?: (event: CustomEvent<any>) => void;
        "template"?: DocsTemplate;
        "toc"?: TableOfContents;
    }
    interface DocsSearch {
    }
    interface InPageNavigation {
        "headings"?: HeadingData[];
        "repoFileUrl"?: string;
    }
    interface LandingPage {
        "data"?: any;
    }
    interface LowerContentNav {
        "navigation"?: PageNavigation;
    }
    interface MoreButton {
        "icon"?: string;
    }
    interface NewsletterSignup {
    }
    interface PluginApi {
        "api"?: string;
        "index"?: boolean;
        "name"?: string;
    }
    interface PluginApiIndex {
        "api"?: string;
        "index"?: boolean;
        "name"?: string;
    }
    interface PluginPlatforms {
        "platforms"?: string;
    }
    interface PreFooter {
    }
    interface SiteBackdrop {
        "visible"?: boolean;
    }
    interface SolutionPage {
        "solutionId"?: string;
    }
    interface VersionSelect {
    }
    interface IntrinsicElements {
        "anchor-link": AnchorLink;
        "app-menu-toggle": AppMenuToggle;
        "avc-code-type": AvcCodeType;
        "blog-page": BlogPage;
        "blog-post": BlogPost;
        "capacitor-community": CapacitorCommunity;
        "capacitor-enterprise": CapacitorEnterprise;
        "capacitor-hubspot-form": CapacitorHubspotForm;
        "capacitor-site": CapacitorSite;
        "capacitor-site-footer": CapacitorSiteFooter;
        "capacitor-site-header": CapacitorSiteHeader;
        "code-snippet": CodeSnippet;
        "contributor-list": ContributorList;
        "cordova-landing-page": CordovaLandingPage;
        "doc-snippet": DocSnippet;
        "docs-component": DocsComponent;
        "docs-header": DocsHeader;
        "docs-menu": DocsMenu;
        "docs-search": DocsSearch;
        "in-page-navigation": InPageNavigation;
        "landing-page": LandingPage;
        "lower-content-nav": LowerContentNav;
        "more-button": MoreButton;
        "newsletter-signup": NewsletterSignup;
        "plugin-api": PluginApi;
        "plugin-api-index": PluginApiIndex;
        "plugin-platforms": PluginPlatforms;
        "pre-footer": PreFooter;
        "site-backdrop": SiteBackdrop;
        "solution-page": SolutionPage;
        "version-select": VersionSelect;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "anchor-link": LocalJSX.AnchorLink & JSXBase.HTMLAttributes<HTMLAnchorLinkElement>;
            "app-menu-toggle": LocalJSX.AppMenuToggle & JSXBase.HTMLAttributes<HTMLAppMenuToggleElement>;
            "avc-code-type": LocalJSX.AvcCodeType & JSXBase.HTMLAttributes<HTMLAvcCodeTypeElement>;
            "blog-page": LocalJSX.BlogPage & JSXBase.HTMLAttributes<HTMLBlogPageElement>;
            "blog-post": LocalJSX.BlogPost & JSXBase.HTMLAttributes<HTMLBlogPostElement>;
            "capacitor-community": LocalJSX.CapacitorCommunity & JSXBase.HTMLAttributes<HTMLCapacitorCommunityElement>;
            "capacitor-enterprise": LocalJSX.CapacitorEnterprise & JSXBase.HTMLAttributes<HTMLCapacitorEnterpriseElement>;
            "capacitor-hubspot-form": LocalJSX.CapacitorHubspotForm & JSXBase.HTMLAttributes<HTMLCapacitorHubspotFormElement>;
            "capacitor-site": LocalJSX.CapacitorSite & JSXBase.HTMLAttributes<HTMLCapacitorSiteElement>;
            "capacitor-site-footer": LocalJSX.CapacitorSiteFooter & JSXBase.HTMLAttributes<HTMLCapacitorSiteFooterElement>;
            "capacitor-site-header": LocalJSX.CapacitorSiteHeader & JSXBase.HTMLAttributes<HTMLCapacitorSiteHeaderElement>;
            "code-snippet": LocalJSX.CodeSnippet & JSXBase.HTMLAttributes<HTMLCodeSnippetElement>;
            "contributor-list": LocalJSX.ContributorList & JSXBase.HTMLAttributes<HTMLContributorListElement>;
            "cordova-landing-page": LocalJSX.CordovaLandingPage & JSXBase.HTMLAttributes<HTMLCordovaLandingPageElement>;
            "doc-snippet": LocalJSX.DocSnippet & JSXBase.HTMLAttributes<HTMLDocSnippetElement>;
            "docs-component": LocalJSX.DocsComponent & JSXBase.HTMLAttributes<HTMLDocsComponentElement>;
            "docs-header": LocalJSX.DocsHeader & JSXBase.HTMLAttributes<HTMLDocsHeaderElement>;
            "docs-menu": LocalJSX.DocsMenu & JSXBase.HTMLAttributes<HTMLDocsMenuElement>;
            "docs-search": LocalJSX.DocsSearch & JSXBase.HTMLAttributes<HTMLDocsSearchElement>;
            "in-page-navigation": LocalJSX.InPageNavigation & JSXBase.HTMLAttributes<HTMLInPageNavigationElement>;
            "landing-page": LocalJSX.LandingPage & JSXBase.HTMLAttributes<HTMLLandingPageElement>;
            "lower-content-nav": LocalJSX.LowerContentNav & JSXBase.HTMLAttributes<HTMLLowerContentNavElement>;
            "more-button": LocalJSX.MoreButton & JSXBase.HTMLAttributes<HTMLMoreButtonElement>;
            "newsletter-signup": LocalJSX.NewsletterSignup & JSXBase.HTMLAttributes<HTMLNewsletterSignupElement>;
            "plugin-api": LocalJSX.PluginApi & JSXBase.HTMLAttributes<HTMLPluginApiElement>;
            "plugin-api-index": LocalJSX.PluginApiIndex & JSXBase.HTMLAttributes<HTMLPluginApiIndexElement>;
            "plugin-platforms": LocalJSX.PluginPlatforms & JSXBase.HTMLAttributes<HTMLPluginPlatformsElement>;
            "pre-footer": LocalJSX.PreFooter & JSXBase.HTMLAttributes<HTMLPreFooterElement>;
            "site-backdrop": LocalJSX.SiteBackdrop & JSXBase.HTMLAttributes<HTMLSiteBackdropElement>;
            "solution-page": LocalJSX.SolutionPage & JSXBase.HTMLAttributes<HTMLSolutionPageElement>;
            "version-select": LocalJSX.VersionSelect & JSXBase.HTMLAttributes<HTMLVersionSelectElement>;
        }
    }
}
