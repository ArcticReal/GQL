
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {FacilityType} from '../product/Facility.js';
import {ContactMechType} from '../party/ContactMech.js';
import {ContactMechPurposeTypeType} from '../party/ContactMechPurposeType.js';


const FacilityContactMechPurposeType = new GraphQLObjectType({
  name: 'FacilityContactMechPurposeType',
  description: 'Type for FacilityContactMechPurpose in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    facility: {
      type: FacilityType,
      args : {facilityId: {type: GraphQLString}},
      resolve: (facilityContactMechPurpose, args, {loaders}) => loaders.ofbiz.load(`product/facilitys/find?facilityId=${facilityContactMechPurpose.facilityId}`)
    },
    contactMechPurposeType: {
      type: ContactMechPurposeTypeType,
      args : {contactMechPurposeTypeId: {type: GraphQLString}},
      resolve: (facilityContactMechPurpose, args, {loaders}) => loaders.ofbiz.load(`party/contactMech/contactMechPurposeTypes/find?contactMechPurposeTypeId=${facilityContactMechPurpose.contactMechPurposeTypeId}`)
    },
    contactMech: {
      type: ContactMechType,
      args : {contactMechId: {type: GraphQLString}},
      resolve: (facilityContactMechPurpose, args, {loaders}) => loaders.ofbiz.load(`party/contactMechs/find?contactMechId=${facilityContactMechPurpose.contactMechId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {FacilityContactMechPurposeType};
    




const FacilityContactMechPurposeInputType = new GraphQLInputObjectType({
  name: 'FacilityContactMechPurposeInputType',
  description: 'input type for FacilityContactMechPurpose in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    facilityId: {type: GraphQLString},
    contactMechPurposeTypeId: {type: GraphQLString},
    contactMechId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {FacilityContactMechPurposeInputType};
    