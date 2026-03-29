/// <reference types="svelte" />

import type { Action } from 'svelte/action';
import { CreateFilterFunction } from 'svelecte/dist/Svelecte.svelte';
import { CreateHandlerFunction } from 'svelecte/dist/Svelecte.svelte';
import type { HTMLInputAttributes } from 'svelte/elements';
import { OptionResolverFunction } from 'svelecte/dist/Svelecte.svelte';
import type { Readable } from 'svelte/store';
import { RenderFunction } from 'svelecte/dist/Svelecte.svelte';
import { SearchProps } from 'svelecte/dist/utils/list';
import { SvelteComponent } from 'svelte';
import type { Writable } from 'svelte/store';
import { z } from 'zod';
import { ZodString } from 'zod';

declare const __propDef: {
    props: {
        [x: string]: any;
        title: string;
        checked?: boolean | undefined;
    };
    events: {
        keyup: KeyboardEvent;
        keydown: KeyboardEvent;
        keypress: KeyboardEvent;
        focus: FocusEvent;
        blur: FocusEvent;
        click: MouseEvent;
        mouseover: MouseEvent;
        mouseenter: MouseEvent;
        mouseleave: MouseEvent;
        paste: ClipboardEvent;
        change: Event;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: undefined;
    bindings?: undefined;
};

declare const __propDef_10: {
    props: {
        [x: string]: any;
        checked?: boolean | undefined;
    };
    events: {
        blur: FocusEvent;
        change: Event;
        click: MouseEvent;
        focus: FocusEvent;
        keydown: KeyboardEvent;
        keypress: KeyboardEvent;
        keyup: KeyboardEvent;
        mouseenter: MouseEvent;
        mouseleave: MouseEvent;
        mouseover: MouseEvent;
        paste: ClipboardEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: undefined;
    bindings?: undefined;
};

declare const __propDef_11: {
    props: {
        containerClass?: string | undefined;
        itemClass?: string | undefined;
        activeClass?: string | undefined;
        currentValue?: unknown;
        label: string;
        name?: string | null | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};

declare const __propDef_12: {
    props: {
        value: boolean;
        label: string;
        name: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};

declare const __propDef_13: {
    props: {
        value: string;
        label: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};

declare const __propDef_14: {
    props: {
        value: string;
        label: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};

declare const __propDef_15: {
    props: {
        label: string;
        min: string;
        max: string;
        step: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};

declare const __propDef_16: {
    props: {
        name: string;
        accept: string;
        maxFileSize?: number | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};

declare const __propDef_17: {
    props: {
        parentValue?: string | number | undefined;
        options?: any[] | undefined;
        value?: any;
        virtualList?: boolean | undefined;
        name?: string | undefined;
        focus?: (() => void) | undefined;
        inputId?: string | undefined;
        required?: boolean | undefined;
        disabled?: boolean | undefined;
        anchor_element?: string | undefined;
        optionResolver?: OptionResolverFunction | undefined;
        valueField?: string | undefined;
        labelField?: string | undefined;
        groupLabelField?: string | undefined;
        groupItemsField?: string | undefined;
        disabledField?: string | undefined;
        placeholder?: string | undefined;
        searchable?: boolean | undefined;
        clearable?: boolean | undefined;
        renderer?: string | RenderFunction | undefined;
        disableHighlight?: boolean | undefined;
        highlightFirstItem?: boolean | undefined;
        selectOnTab?: boolean | "select-navigate" | undefined;
        resetOnBlur?: boolean | undefined;
        resetOnSelect?: boolean | undefined;
        closeAfterSelect?: string | boolean | undefined;
        deselectMode?: "toggle" | "none" | "native" | undefined;
        dndzone?: Function | undefined;
        validatorAction?: any[] | undefined;
        strictMode?: boolean | undefined;
        multiple?: boolean | undefined;
        max?: number | undefined;
        collapseSelection?: "blur" | "always" | undefined;
        keepSelectionInList?: boolean | "auto" | undefined;
        creatable?: boolean | undefined;
        creatablePrefix?: string | undefined;
        allowEditing?: boolean | undefined;
        keepCreated?: boolean | undefined;
        delimiter?: string | undefined;
        createFilter?: CreateFilterFunction | undefined;
        createHandler?: CreateHandlerFunction | undefined;
        fetch?: string | undefined;
        fetchProps?: any;
        fetchMode?: "auto" | "init" | undefined;
        fetchCallback?: Function | undefined;
        fetchResetOnBlur?: boolean | undefined;
        fetchDebounceTime?: number | undefined;
        minQuery?: number | undefined;
        lazyDropdown?: boolean | undefined;
        vlHeight?: number | undefined;
        vlItemSize?: number | undefined;
        searchProps?: SearchProps | undefined;
        class?: string | undefined;
        i18n?: any;
        readSelection?: any;
        valueAsObject?: boolean | undefined;
        positionResolver?: ((_node: any) => {
            destroy: () => void;
        }) | undefined;
        setSelection?: ((selection: any, triggerChangeEvent: any) => void) | undefined;
        getSelection?: ((onlyValues: any) => any) | undefined;
        refetchWith?: ((value: string | number | any[]) => void) | undefined;
    } & {
        theme?: "main" | "alt" | "underline" | undefined;
        labelTheme?: "main" | "alt" | undefined;
        size?: "normal" | "compact" | "extraCompact" | undefined;
        errors?: any[] | undefined;
        label?: string | undefined;
        attachToBody: boolean;
        componentContainerMergedClass?: string | undefined;
        autofocus: boolean;
    };
    events: {
        blur: CustomEvent<any>;
        change: CustomEvent<any>;
        createoption: CustomEvent<any>;
        enterKey: CustomEvent<any>;
        fetch: CustomEvent<any>;
        invalidValue: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};

declare const __propDef_18: {
    props: {
        parentValue?: string | number | undefined;
        options?: any[] | undefined;
        value?: any;
        virtualList?: boolean | undefined;
        name?: string | undefined;
        focus?: (() => void) | undefined;
        inputId?: string | undefined;
        required?: boolean | undefined;
        disabled?: boolean | undefined;
        anchor_element?: string | undefined;
        optionResolver?: OptionResolverFunction | undefined;
        valueField?: string | undefined;
        labelField?: string | undefined;
        groupLabelField?: string | undefined;
        groupItemsField?: string | undefined;
        disabledField?: string | undefined;
        placeholder?: string | undefined;
        searchable?: boolean | undefined;
        clearable?: boolean | undefined;
        renderer?: string | RenderFunction | undefined;
        disableHighlight?: boolean | undefined;
        highlightFirstItem?: boolean | undefined;
        selectOnTab?: boolean | "select-navigate" | undefined;
        resetOnBlur?: boolean | undefined;
        resetOnSelect?: boolean | undefined;
        closeAfterSelect?: string | boolean | undefined;
        deselectMode?: "toggle" | "none" | "native" | undefined;
        dndzone?: Function | undefined;
        validatorAction?: any[] | undefined;
        strictMode?: boolean | undefined;
        multiple?: boolean | undefined;
        max?: number | undefined;
        collapseSelection?: "blur" | "always" | undefined;
        keepSelectionInList?: boolean | "auto" | undefined;
        creatable?: boolean | undefined;
        creatablePrefix?: string | undefined;
        allowEditing?: boolean | undefined;
        keepCreated?: boolean | undefined;
        delimiter?: string | undefined;
        createFilter?: CreateFilterFunction | undefined;
        createHandler?: CreateHandlerFunction | undefined;
        fetch?: string | undefined;
        fetchProps?: any;
        fetchMode?: "auto" | "init" | undefined;
        fetchCallback?: Function | undefined;
        fetchResetOnBlur?: boolean | undefined;
        fetchDebounceTime?: number | undefined;
        minQuery?: number | undefined;
        lazyDropdown?: boolean | undefined;
        vlHeight?: number | undefined;
        vlItemSize?: number | undefined;
        searchProps?: SearchProps | undefined;
        class?: string | undefined;
        i18n?: any;
        readSelection?: any;
        valueAsObject?: boolean | undefined;
        positionResolver?: ((_node: any) => {
            destroy: () => void;
        }) | undefined;
        setSelection?: ((selection: any, triggerChangeEvent: any) => void) | undefined;
        getSelection?: ((onlyValues: any) => any) | undefined;
        refetchWith?: ((value: string | number | any[]) => void) | undefined;
    } & {
        icon: string;
    };
    events: {
        blur: CustomEvent<any>;
        change: CustomEvent<any>;
        createoption: CustomEvent<any>;
        enterKey: CustomEvent<any>;
        fetch: CustomEvent<any>;
        invalidValue: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};

declare const __propDef_19: {
    props: HTMLInputAttributes & {
        label: string;
        errors?: any;
        theme?: "main" | "alt" | "underline" | null | undefined;
        labelTheme?: "main" | "alt" | null | undefined;
        labelClass?: string | undefined;
        fontSize?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | null | undefined;
        errorTheme?: "main" | "alt" | "underline" | null | undefined;
        textColorClass?: string | undefined;
        componentContainerMergedClass?: string | undefined;
    };
    events: {
        change: Event;
        blur: FocusEvent;
        input: Event;
        keydown: KeyboardEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};

declare const __propDef_2: {
    props: {
        clickOutside?: boolean | undefined;
        closeOnClick?: boolean | undefined;
        disabled?: boolean | undefined;
        detailedValue?: null | undefined;
        value?: string | undefined;
        plainValue?: string | undefined;
        searchPlaceholder?: string | undefined;
        name?: string | undefined;
        label: string;
        autocomplete: string;
        selectedCountry?: string | undefined;
        valid?: boolean | undefined;
        options?: {
            invalidateOnCountryChange: boolean;
        } | undefined;
    };
    events: {
        keydown: KeyboardEvent;
        change: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};

declare const __propDef_20: {
    props: {
        [x: string]: any;
        value: string;
        name?: string | undefined;
        label: string;
        icon: string | never;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: undefined;
    bindings?: undefined;
};

declare const __propDef_21: {
    props: {
        [x: string]: any;
        startDate: string | undefined;
        endDate: string | undefined;
        theme?: "main" | "alt" | undefined;
        showLabels?: boolean | undefined;
        startDateName?: string | null | undefined;
        endDateName?: string | null | undefined;
    };
    events: {
        change: Event;
        input: Event;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: undefined;
    bindings?: undefined;
};

declare const __propDef_22: {
    props: {
        activePage?: string | number | null | undefined;
        pageSize: number;
        totalItems: number;
        pageParamName?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};

declare const __propDef_23: {
    props: {
        activePage?: string | number | null | undefined;
        pageSize?: number | undefined;
        totalItems?: number | undefined;
        pageParamName?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};

declare const __propDef_24: {
    props: {
        [x: string]: any;
        id: string;
        icon?: string | null | undefined;
    };
    events: {
        selected: CustomEvent<any>;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: undefined;
    bindings?: undefined;
};

declare const __propDef_25: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: {} | undefined;
    bindings?: string | undefined;
};

declare const __propDef_26: {
    props: {
        [x: string]: any;
        useUrlHash?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: undefined;
    bindings?: undefined;
};

declare const __propDef_3: {
    props: {
        [x: string]: any;
        containerElement?: string | undefined;
        animate: boolean | null;
        inDuration?: number | undefined;
        outDuration?: number | undefined;
        when?: "false" | "true" | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: undefined;
    bindings?: undefined;
};

declare const __propDef_4: {
    props: {
        [x: string]: any;
        url: string;
        layoutGroupName: string;
        isRootLayout?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: undefined;
    bindings?: undefined;
};

declare const __propDef_5: {
    props: {
        [x: string]: any;
        url: string;
        layoutGroupName: string;
        isRootLayout?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: undefined;
    bindings?: undefined;
};

declare const __propDef_6: {
    props: {
        [x: string]: any;
        url: string;
        layoutGroupName: string;
        isRootLayout?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: undefined;
    bindings?: undefined;
};

declare const __propDef_7: {
    props: {
        alertStyle?: "outline" | "solid" | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
    exports?: {} | undefined;
    bindings?: string | undefined;
};

declare const __propDef_8: {
    props: {
        [x: string]: any;
        theme?: "none" | "accent" | "primary" | "secondary" | "neutral" | "transparent" | undefined;
        shape?: "miniRound" | "round" | "moreRound" | "extraRound" | "megaRound" | "fullRound" | undefined;
        fontSize?: "xs" | "sm" | "base" | "lg" | "xl" | undefined;
        fontWeight?: "semibold" | "normal" | undefined;
        href?: string | undefined;
        disabled?: boolean | undefined;
        target?: string | undefined;
        type?: string | undefined;
        compact?: boolean | undefined;
        linkBehaveAsButton?: boolean | undefined;
    };
    events: {
        change: Event;
        click: MouseEvent;
        keydown: KeyboardEvent;
        keyup: KeyboardEvent;
        mouseenter: MouseEvent;
        mouseleave: MouseEvent;
        touchcancel: TouchEvent;
        touchend: TouchEvent;
        touchstart: TouchEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: undefined;
    bindings?: undefined;
};

declare const __propDef_9: {
    props: {
        [x: string]: any;
        theme?: "none" | "accent" | "primary" | "secondary" | "neutral" | "transparent" | "gray" | "danger" | undefined;
        href?: string | undefined;
        disabled?: boolean | undefined;
        target?: string | undefined;
        type?: string | undefined;
    };
    events: {
        change: Event;
        click: MouseEvent;
        keydown: KeyboardEvent;
        keyup: KeyboardEvent;
        mouseenter: MouseEvent;
        mouseleave: MouseEvent;
        touchcancel: TouchEvent;
        touchend: TouchEvent;
        touchstart: TouchEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
    exports?: undefined;
    bindings?: undefined;
};

export declare class Alerts extends SvelteComponent<AlertsProps, AlertsEvents, AlertsSlots> {
}

declare type AlertsEvents = typeof __propDef_7.events;

declare type AlertsProps = typeof __propDef_7.props;

declare type AlertsSlots = typeof __propDef_7.slots;

export declare type AnyPrimitiveValue = string | number | boolean | object;

export declare type AnyValue = AnyPrimitiveValue | Record<string, AnyPrimitiveValue>;

export declare class AppButton extends SvelteComponent<AppButtonProps, AppButtonEvents, AppButtonSlots> {
}

declare type AppButtonEvents = typeof __propDef_8.events;

declare type AppButtonProps = typeof __propDef_8.props;

declare type AppButtonSlots = typeof __propDef_8.slots;

export declare class AppFlatButton extends SvelteComponent<AppFlatButtonProps, AppFlatButtonEvents, AppFlatButtonSlots> {
}

declare type AppFlatButtonEvents = typeof __propDef_9.events;

declare type AppFlatButtonProps = typeof __propDef_9.props;

declare type AppFlatButtonSlots = typeof __propDef_9.slots;

export declare class AppFlatToggleButton extends SvelteComponent<AppFlatToggleButtonProps, AppFlatToggleButtonEvents, AppFlatToggleButtonSlots> {
}

declare type AppFlatToggleButtonEvents = typeof __propDef_10.events;

declare type AppFlatToggleButtonProps = typeof __propDef_10.props;

declare type AppFlatToggleButtonSlots = typeof __propDef_10.slots;

export declare class AppPagination extends SvelteComponent<AppPaginationProps, AppPaginationEvents, AppPaginationSlots> {
}

declare type AppPaginationEvents = typeof __propDef_22.events;

declare type AppPaginationProps = typeof __propDef_22.props;

declare type AppPaginationSlots = typeof __propDef_22.slots;

export declare class AppTablePagination extends SvelteComponent<AppTablePaginationProps, AppTablePaginationEvents, AppTablePaginationSlots> {
}

declare type AppTablePaginationEvents = typeof __propDef_23.events;

declare type AppTablePaginationProps = typeof __propDef_23.props;

declare type AppTablePaginationSlots = typeof __propDef_23.slots;

export declare class AppTheme {
    colors?: Record<string, string>;
    layouts?: Record<string, Record<string, any>>;
    compiledCss?: string;
    constructor(source?: Partial<AppTheme>);
    private compileCss;
}

export declare interface AppThemeStore extends Writable<AppTheme> {
    set: (theme: Partial<AppTheme>) => void;
    reset: () => void;
}

export declare interface BaseUser {
    id: string;
    email: string;
}

export declare type ButtonTheme = 'primary' | 'secondary' | 'accent' | 'natural';

export declare type CheckBoxAction = Action<HTMLInputElement, CheckBoxActionParams>;

export declare interface CheckBoxActionParams {
    valueStore: Writable<boolean>;
    subElement: Writable<HTMLInputElement>;
}

export declare class ConditionalTransition extends SvelteComponent<ConditionalTransitionProps, ConditionalTransitionEvents, ConditionalTransitionSlots> {
}

export declare const conditionalTransitionDuration: {
    in: number;
    out: number;
};

declare type ConditionalTransitionEvents = typeof __propDef_3.events;

declare type ConditionalTransitionProps = typeof __propDef_3.props;

declare type ConditionalTransitionSlots = typeof __propDef_3.slots;

export declare function constructRouteObject(id: string, path?: string): ({
    path: string;
    toString: () => string;
    id: string;
});

declare interface Coord {
    lat: number;
    lng: number;
}

export declare interface Coordinates {
    latitude: number | string;
    longitude: number | string;
}

export declare function createEmptyHtmlSpaces(count: number): string;

export declare function createLinkedStores<P, C>(parentStore: Writable<P>, parentToChildTransformerFn: (value: P) => C, onChildUpdate: (value: C) => void): Writable<C>;

export declare function createNotificationPopupStore(alertTimeout?: number): NotificationPopupStore;

export declare function createRandomEmptyHtmlSpaces(min: number, max: number): string;

export declare function createThemeStore(theme?: AppTheme): AppThemeStore;

export declare function createUserStore<U extends BaseUser>(user?: U | null): UserStore<U>;

export declare function decodeAndSanitizeHtmlTextOnly(input: string): string;

export declare function decodeJsonBase64<T extends object>(str: string): T;

export declare interface DropdownItemProps {
    dropdownOpen: Writable<boolean>;
    onChange: (item: DropDownSelection) => void;
    itemClass: string;
    activeClass: string;
    currentValueStore: Writable<AnyValue>;
    selectedItemsLabelStore: Writable<Record<string, string>>;
    name: string | null;
}

export declare type DropdownItemsType = 'select' | 'checkbox' | 'radio' | 'range';

export declare interface DropDownSelection {
    value: unknown;
    label: string;
}

export declare const emailValidation: z.ZodString;

export declare function encodeJsonBase64(obj: object): string;

export declare function fetchDelete<R = any, B = object>(url: string, body?: B): Promise<R>;

export declare function fetchGet<R>(url: string): Promise<R>;

export declare function fetchPatch<R = any, B = object>(url: string, body?: B): Promise<R>;

export declare function fetchPost<R = any, B = object>(url: string, body?: B): Promise<R>;

export declare class FileUpload extends SvelteComponent<FileUploadProps, FileUploadEvents, FileUploadSlots> {
}

declare type FileUploadEvents = typeof __propDef_16.events;

declare type FileUploadProps = typeof __propDef_16.props;

declare type FileUploadSlots = typeof __propDef_16.slots;

export declare class FilterDropdown extends SvelteComponent<FilterDropdownProps, FilterDropdownEvents, FilterDropdownSlots> {
}

export declare class FilterDropdownCheckbox extends SvelteComponent<FilterDropdownCheckboxProps, FilterDropdownCheckboxEvents, FilterDropdownCheckboxSlots> {
}

declare type FilterDropdownCheckboxEvents = typeof __propDef_12.events;

declare type FilterDropdownCheckboxProps = typeof __propDef_12.props;

declare type FilterDropdownCheckboxSlots = typeof __propDef_12.slots;

declare type FilterDropdownEvents = typeof __propDef_11.events;

export declare class FilterDropdownItem extends SvelteComponent<FilterDropdownItemProps, FilterDropdownItemEvents, FilterDropdownItemSlots> {
}

declare type FilterDropdownItemEvents = typeof __propDef_13.events;

declare type FilterDropdownItemProps = typeof __propDef_13.props;

declare type FilterDropdownItemSlots = typeof __propDef_13.slots;

declare type FilterDropdownProps = typeof __propDef_11.props;

export declare class FilterDropdownRadio extends SvelteComponent<FilterDropdownRadioProps, FilterDropdownRadioEvents, FilterDropdownRadioSlots> {
}

declare type FilterDropdownRadioEvents = typeof __propDef_14.events;

declare type FilterDropdownRadioProps = typeof __propDef_14.props;

declare type FilterDropdownRadioSlots = typeof __propDef_14.slots;

export declare class FilterDropdownRange extends SvelteComponent<FilterDropdownRangeProps, FilterDropdownRangeEvents, FilterDropdownRangeSlots> {
}

declare type FilterDropdownRangeEvents = typeof __propDef_15.events;

declare type FilterDropdownRangeProps = typeof __propDef_15.props;

declare type FilterDropdownRangeSlots = typeof __propDef_15.slots;

declare type FilterDropdownSlots = typeof __propDef_11.slots;

export declare interface FormMessage {
    type: 'error' | 'success';
    text: string;
}

export declare function injectDependenciesIntoContext<U extends BaseUser>(user: U | null, injectCallback?: (userStore: UserStore<U>) => void): void;

export declare class InputAutocompleteRegular extends SvelteComponent<InputAutocompleteRegularProps, InputAutocompleteRegularEvents, InputAutocompleteRegularSlots> {
}

declare type InputAutocompleteRegularEvents = typeof __propDef_17.events;

declare type InputAutocompleteRegularProps = typeof __propDef_17.props;

declare type InputAutocompleteRegularSlots = typeof __propDef_17.slots;

export declare class InputAutocompleteWithIcon extends SvelteComponent<InputAutocompleteWithIconProps, InputAutocompleteWithIconEvents, InputAutocompleteWithIconSlots> {
}

declare type InputAutocompleteWithIconEvents = typeof __propDef_18.events;

declare type InputAutocompleteWithIconProps = typeof __propDef_18.props;

declare type InputAutocompleteWithIconSlots = typeof __propDef_18.slots;

export declare type InputChangeEvent = Event & {
    currentTarget: (EventTarget & HTMLInputElement);
};

export declare class InputRegular extends SvelteComponent<InputRegularProps, InputRegularEvents, InputRegularSlots> {
}

declare type InputRegularEvents = typeof __propDef_19.events;

declare type InputRegularProps = typeof __propDef_19.props;

declare type InputRegularSlots = typeof __propDef_19.slots;

export declare class InputWithIcon extends SvelteComponent<InputWithIconProps, InputWithIconEvents, InputWithIconSlots> {
}

declare type InputWithIconEvents = typeof __propDef_20.events;

declare type InputWithIconProps = typeof __propDef_20.props;

declare type InputWithIconSlots = typeof __propDef_20.slots;

export declare class IntlTelInput extends SvelteComponent<IntlTelInputProps, IntlTelInputEvents, IntlTelInputSlots> {
}

declare type IntlTelInputEvents = typeof __propDef_2.events;

declare type IntlTelInputProps = typeof __propDef_2.props;

declare type IntlTelInputSlots = typeof __propDef_2.slots;

export declare function isNilOrEmpty<T>(value: T): boolean;

export declare function isNotNilOrEmpty<T>(value: T): value is NonNullable<T>;

export declare interface JobData {
    title: string;
    description: string;
    url: string;
    externalUrl: string;
    external_id: string;
    cpc: number;
    entity_name: string;
    addresses: Array<{
        country: string;
        city: string;
        coordinates: string;
        state: string;
    }>;
    company_name: string;
    job_source_id: string;
    remote: boolean;
    pay_rate: string;
    task_id: string;
    id: string;
    entity: string;
    posted_date: Date;
    title_exact: string;
    updated_at: Date;
    created_at: Date;
    country: string;
    city: string;
    coordinates: string;
    state: string;
    sort: string;
    new: boolean;
    title_slug: string;
    category: string;
    type: string;
    reference_number: string;
    postal_code: string;
    job_posting: string;
    branch: string;
    location: string;
    sign_on_bonus: string;
    is_dalia_hosted_job: boolean;
    hosted_apply_url: string;
}

export declare interface JobsResult {
    total: number;
    jobs: JobData[];
}

export declare function localApiUrlConstructor<P extends object = object>(path: string, defaultParams?: Partial<P>): (params?: P) => string;

export declare class LocationClientService {
    fetchUserCoordinates(): Promise<Coordinates>;
    fetchUserLocation(types?: string): Promise<SearchLocation>;
    getBrowserCoordinates(): Promise<GeolocationPosition>;
    fetchLocationFromCoordinates(geoLocationCoordinates: Coordinates, types?: string): Promise<SearchLocation>;
    getTravelData(params: {
        originCoordinates?: Coordinates | null;
        destinationAddress: string;
        options: TravelDataOptions;
    }): Promise<TravelDataResponse>;
}

export declare interface NotificationAlert {
    type: 'success' | 'error' | 'info' | 'warning';
    message: string;
}

export declare interface NotificationPopupStore extends Readable<NotificationAlert[]> {
    push: (alert: NotificationAlert, timeout?: number) => void;
    remove: (alert: NotificationAlert) => void;
    pop: () => void;
}

export declare const optionalPhoneValidation: z.ZodEffects<z.ZodString, string, string>;

export declare class PageFadeTransition extends SvelteComponent<PageFadeTransitionProps, PageFadeTransitionEvents, PageFadeTransitionSlots> {
}

declare type PageFadeTransitionEvents = typeof __propDef_5.events;

declare type PageFadeTransitionProps = typeof __propDef_5.props;

declare type PageFadeTransitionSlots = typeof __propDef_5.slots;

export declare class PageScaleTransition extends SvelteComponent<PageScaleTransitionProps, PageScaleTransitionEvents, PageScaleTransitionSlots> {
}

declare type PageScaleTransitionEvents = typeof __propDef_6.events;

declare type PageScaleTransitionProps = typeof __propDef_6.props;

declare type PageScaleTransitionSlots = typeof __propDef_6.slots;

export declare class PageTransition extends SvelteComponent<PageTransitionProps, PageTransitionEvents, PageTransitionSlots> {
}

export declare const pageTransitionDuration = 150;

declare type PageTransitionEvents = typeof __propDef_4.events;

declare type PageTransitionProps = typeof __propDef_4.props;

declare type PageTransitionSlots = typeof __propDef_4.slots;

export declare function parseBoolean(value: any): boolean | null;

export declare type PartialSearchLocation = Partial<SearchLocation>;

export declare function passThrough<T>(fn: (value: T) => void): (value: T) => T;

export declare interface Place {
    address: string;
    city: string;
    state: string;
    country: string;
    latitude: number;
    longitude: number;
}

export declare function queryFromUrl<T = Record<string, string>>(url: URL): T;

export declare function queryFromUrlDefaults(url: URL, defaults: Record<string, any>): Record<string, any>;

export declare const refreshQueryParamName = "refresh";

export declare class RegularDateRangePicker extends SvelteComponent<RegularDateRangePickerProps, RegularDateRangePickerEvents, RegularDateRangePickerSlots> {
}

declare type RegularDateRangePickerEvents = typeof __propDef_21.events;

declare type RegularDateRangePickerProps = typeof __propDef_21.props;

declare type RegularDateRangePickerSlots = typeof __propDef_21.slots;

export declare const requiredStringValidation: (zs?: ZodString) => ZodString;

export declare function requireLocationClientService(): LocationClientService;

export declare function requireNotificationPopupStore(): NotificationPopupStore;

export declare function requireSharedFingerprintBrowserService(): SharedFingerprintBrowserService;

export declare function requireSharedUtilsBrowserService(): SharedUtilsBrowserService;

export declare function requireThemeStore(): AppThemeStore;

export declare function requireUserStore<U extends BaseUser>(): UserStore<U>;

export declare interface RouteSegment {
    id: number;
    type: string;
    mode: string;
    directions: string;
    distance: number;
    travel_time: number;
    coords: Coord[];
    direction?: string;
    road?: string;
    turn?: string;
}

export declare function sanitizeHtmlTextOnly(input: string): string;

export declare interface SearchLocation {
    id?: string;
    name: string;
    lat: number;
    lng: number;
    shortCode?: string;
    country?: string;
    metadata?: Place;
}

export declare interface SearchQuery {
    keyword: string;
}

export declare interface SessionCookie2faPayload {
    id: string;
    passed2fa: boolean;
}

export declare interface SessionCookiePayload {
    id: string;
}

export declare interface SessionUrlParamPayload {
    data: string[];
}

export declare const SharedApiPaths: {
    gecodeAddress: string;
    userLocation: string;
    travelData: string;
    searchQuerySuggestions: string;
    logEvent: string;
};

export declare const SharedApiUrls: {
    searchQuerySuggestions: (params?: {
        search: string;
    } | undefined) => string;
    gecodeAddress: (params?: {
        search?: string | undefined;
        types?: string | undefined;
        countries?: string | undefined;
    } | undefined) => string;
    travelData: (params?: object | undefined) => string;
    userLocation: (params?: (Coordinates & {
        types?: string | undefined;
    }) | undefined) => string;
    logEvent: (params?: object | undefined) => string;
};

declare class SharedFingerprintBrowserService {
    private _fingerprint;
    init(): Promise<void>;
    getVisitorId(): Promise<string>;
}

export declare class SharedUtilsBrowserService {
    logEvent(actionEventName: string, params: Record<string, unknown>): Promise<void>;
}

export declare function smoothScrollToElementWithOffset(element: HTMLElement, offset: number): void;

export declare const strongPasswordValidation: z.ZodString;

export declare class Tab extends SvelteComponent<TabProps, TabEvents, TabSlots> {
}

declare type TabEvents = typeof __propDef_24.events;

/** @typedef {typeof __propDef.props}  TabListProps */
/** @typedef {typeof __propDef.events}  TabListEvents */
/** @typedef {typeof __propDef.slots}  TabListSlots */
export declare class TabList extends SvelteComponent<{
    [x: string]: any;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}

export declare class TabPanel extends SvelteComponent<TabPanelProps, TabPanelEvents, TabPanelSlots> {
}

declare type TabPanelEvents = typeof __propDef_25.events;

declare type TabPanelProps = typeof __propDef_25.props;

declare type TabPanelSlots = typeof __propDef_25.slots;

declare type TabProps = typeof __propDef_24.props;

export declare class Tabs extends SvelteComponent<TabsProps, TabsEvents, TabsSlots> {
}

declare type TabsEvents = typeof __propDef_26.events;

declare type TabSlots = typeof __propDef_24.slots;

declare type TabsProps = typeof __propDef_26.props;

declare type TabsSlots = typeof __propDef_26.slots;

export declare class ToggleAccordion extends SvelteComponent<ToggleAccordionProps, ToggleAccordionEvents, ToggleAccordionSlots> {
}

declare type ToggleAccordionEvents = typeof __propDef.events;

declare type ToggleAccordionProps = typeof __propDef.props;

declare type ToggleAccordionSlots = typeof __propDef.slots;

export declare function toNormalCase(str: string): string;

export declare type TransportationType = 'driving' | 'walking' | 'cycling' | 'public_transport';

export declare interface TravelDataOptions {
    transportationType: 'driving' | 'walking' | 'cycling' | 'public_transport';
    reverseGeocodeOrigin?: boolean;
}

export declare interface TravelDataResponse {
    duration: number;
    distance: number;
    directions: RouteSegment[];
    destinationCoordinates: Coordinates;
    originAddress: Place;
}

export declare function upsertUniqueByKey<T>(key: keyof T, obj: T, arr: T[]): T[];

export declare interface UserStore<U extends BaseUser> extends Writable<U | null> {
    get: U | null;
    timestamp: number;
}

export declare type WithKeys<T> = T | keyof T;

export { }
