
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
import {ContactMech} from '../product/ContactMech.js';


const FacilityContactMech = new GraphQLObjectType({
  name: 'FacilityContactMechType',
  description: 'Type for FacilityContactMech in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    extension: {type: GraphQLString},
    facility: {
      type: FacilityType,
      args : {facilityId: {type: GraphQLString}},
      resolve: (facilityContactMech, args, {loaders}) => loaders.ofbizArray.load(`facilitys/find?=${args.facilityId}`)
    },
    comments: {type: GraphQLString},
    contactMech: {
      type: ContactMechType,
      args : {contactMechId: {type: GraphQLString}},
      resolve: (facilityContactMech, args, {loaders}) => loaders.ofbizArray.load(`contactMechs/find?=${args.contactMechId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {FacilityContactMech};
    