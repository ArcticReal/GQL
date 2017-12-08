
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


const FacilityContactMechType = new GraphQLObjectType({
  name: 'FacilityContactMechType',
  description: 'Type for FacilityContactMech in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    extension: {type: GraphQLString},
    facility: {
      type: FacilityType,
      args : {facilityId: {type: GraphQLString}},
      resolve: (facilityContactMech, args, {loaders}) => loaders.ofbiz.load(`facilitys/find?facilityId=${facilityContactMech.facilityId}`)
    },
    comments: {type: GraphQLString},
    contactMech: {
      type: ContactMechType,
      args : {contactMechId: {type: GraphQLString}},
      resolve: (facilityContactMech, args, {loaders}) => loaders.ofbiz.load(`contactMechs/find?contactMechId=${facilityContactMech.contactMechId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {FacilityContactMechType};
    




const FacilityContactMechInputType = new GraphQLInputObjectType({
  name: 'FacilityContactMechInputType',
  description: 'input type for FacilityContactMech in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    extension: {type: GraphQLString},
    facilityId: {type: GraphQLString},
    comments: {type: GraphQLString},
    contactMechId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {FacilityContactMechInputType};
    