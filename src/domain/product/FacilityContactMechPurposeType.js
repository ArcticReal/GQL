
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {FacilityType} from '../product/FacilityType.js';
import {ContactMechType} from '../party/ContactMechType.js';
import {ContactMechPurposeTypeType} from '../party/ContactMechPurposeTypeType.js';


const FacilityContactMechPurposeType = new GraphQLObjectType({
  name: 'FacilityContactMechPurposeType',
  description: 'Type for FacilityContactMechPurpose in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    facility: {
      type: FacilityType,
      args : {facilityId: {type: GraphQLString}},
      resolve: (facilityContactMechPurpose, args, {loaders}) => loaders.ofbiz.load(`facilitys/find?facilityId=${facilityContactMechPurpose.facilityId}`)
    },
    contactMechPurposeType: {
      type: ContactMechPurposeTypeType,
      args : {contactMechPurposeTypeId: {type: GraphQLString}},
      resolve: (facilityContactMechPurpose, args, {loaders}) => loaders.ofbiz.load(`contactMechPurposeTypes/find?contactMechPurposeTypeId=${facilityContactMechPurpose.contactMechPurposeTypeId}`)
    },
    contactMech: {
      type: ContactMechType,
      args : {contactMechId: {type: GraphQLString}},
      resolve: (facilityContactMechPurpose, args, {loaders}) => loaders.ofbiz.load(`contactMechs/find?contactMechId=${facilityContactMechPurpose.contactMechId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {FacilityContactMechPurposeType};
    