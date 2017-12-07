
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
    