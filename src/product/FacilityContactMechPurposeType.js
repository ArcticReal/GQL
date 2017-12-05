
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {Facility} from '../product/Facility.js';
import {ContactMechPurposeType} from '../product/ContactMechPurposeType.js';
import {ContactMech} from '../product/ContactMech.js';


const FacilityContactMechPurpose = new GraphQLObjectType({
  name: 'FacilityContactMechPurposeType',
  description: 'Type for FacilityContactMechPurpose in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    facility: {
      type: FacilityType,
      args : {facilityId: {type: GraphQLString}},
      resolve: (facilityContactMechPurpose, args, {loaders}) => loaders.ofbizArray.load(`facilitys/find?=${args.facilityId}`)
    },
    contactMechPurposeType: {
      type: ContactMechPurposeTypeType,
      args : {contactMechPurposeTypeId: {type: GraphQLString}},
      resolve: (facilityContactMechPurpose, args, {loaders}) => loaders.ofbizArray.load(`contactMechPurposeTypes/find?=${args.contactMechPurposeTypeId}`)
    },
    contactMech: {
      type: ContactMechType,
      args : {contactMechId: {type: GraphQLString}},
      resolve: (facilityContactMechPurpose, args, {loaders}) => loaders.ofbizArray.load(`contactMechs/find?=${args.contactMechId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {FacilityContactMechPurpose};
    