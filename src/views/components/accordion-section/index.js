import React, { Component } from "react";
import { node, bool, string, func } from "prop-types";

class AccordionSection extends Component {
    static propTypes = {
        children: node.isRequired,
        label: string.isRequired,
        isOpen: bool.isRequired,
        onClick: func.isRequired
    };

    onClick = () => {
        this.props.onClick(this.props.label);
    };

    render() {
        return (
            <li>
                <div className="collapsible-header" onClick={this.onClick}>
                    {this.props.label}
                </div>
                {this.props.isOpen && (
                    <div>
                        {this.props.children}
                    </div>
                )}
            </li>
        );
    }
}

export default AccordionSection;
