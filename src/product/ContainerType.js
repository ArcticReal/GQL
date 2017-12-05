
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
import {ContainerType} from '../product/ContainerType.js';


const Container = new GraphQLObjectType({
  name: 'ContainerType',
  description: 'Type for Container in product',

  fields: () => ({
    facility: {
      type: FacilityType,
      args : {facilityId: {type: GraphQLString}},
      resolve: (container, args, {loaders}) => loaders.ofbizArray.load(`facilitys/find?=${args.facilityId}`)
    },
    containerType: {
      type: ContainerTypeType,
      args : {containerTypeId: {type: GraphQLString}},
      resolve: (container, args, {loaders}) => loaders.ofbizArray.load(`containerTypes/find?=${args.containerTypeId}`)
    },
    description: {type: GraphQLString},
    containerId: {type: GraphQLString}
  })
});

export {Container};
    