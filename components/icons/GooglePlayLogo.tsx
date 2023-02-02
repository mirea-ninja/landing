import LogoProps from "@/components/icons/LogoProps";

export default function GooglePlayLogo(props: LogoProps) {
    return (
        <svg
            viewBox="0 0 800 800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={props.className}
        >
            <g fill="currentColor">
                <path d="M75 92.9531V707.016C75.0041 708.348 75.4015 709.649 76.1422 710.757C76.883 711.864 77.9342 712.728 79.164 713.24C80.3939 713.752 81.7476 713.89 83.0554 713.636C84.3632 713.382 85.5669 712.748 86.5156 711.812L406.25 400L86.5156 88.1562C85.5669 87.2209 84.3632 86.5864 83.0554 86.3325C81.7476 86.0785 80.3939 86.2163 79.164 86.7286C77.9342 87.2408 76.883 88.1048 76.1422 89.2122C75.4015 90.3195 75.0041 91.6209 75 92.9531Z" />
                <path d="M540.312 271.875L139.406 51L139.156 50.8594C132.25 47.1094 125.687 56.4531 131.344 61.8906L445.609 362.391L540.312 271.875Z" />
                <path d="M131.375 738.109C125.687 743.547 132.25 752.891 139.187 749.141L139.437 749L540.312 528.125L445.609 437.578L131.375 738.109Z" />
                <path d="M702.156 360.938L590.203 299.281L484.937 400L590.203 500.672L702.156 439.063C732.609 422.234 732.609 377.766 702.156 360.938Z" />
            </g>
        </svg>
    );
}
