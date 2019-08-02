import React, { Component } from "react";
import { node } from "prop-types";

import AccordionSection from "../accordion-section";

class Accordion extends Component {
    static propTypes = {
        children: node.isRequired,
    };

    constructor(props) {
        super(props);

        const openSections = {};

        this.props.children.forEach(child => {
            if (child.props.isOpen) {
                openSections[child.props.label] = true;
            }
        });

        this.state = { openSections };
    }

    onClick = label => {
        const isOpen = !!this.state.openSections[label];

        this.setState({
            openSections: {
                [label]: !isOpen
            }
        });
    };

    render() {
        return (
            <ul className="collapsible">
                {this.props.children.map(child => (
                    <AccordionSection
                        key={child.props.label}
                        isOpen={!!this.state.openSections[child.props.label]}
                        label={child.props.label}
                        onClick={this.onClick}
                    >
                        {child.props.children}
                    </AccordionSection>
                ))}
            </ul>
        );
    }
}

export default Accordion;
