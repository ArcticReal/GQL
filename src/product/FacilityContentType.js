
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
import {Content} from '../product/Content.js';


const FacilityContent = new GraphQLObjectType({
  name: 'FacilityContentType',
  description: 'Type for FacilityContent in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    facility: {
      type: FacilityType,
      args : {facilityId: {type: GraphQLString}},
      resolve: (facilityContent, args, {loaders}) => loaders.ofbizArray.load(`facilitys/find?=${args.facilityId}`)
    },
    content: {
      type: ContentType,
      args : {contentId: {type: GraphQLString}},
      resolve: (facilityContent, args, {loaders}) => loaders.ofbizArray.load(`contents/find?=${args.contentId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {FacilityContent};
    