<template>
<div class="sort" ref="sort">
    <ul class="content">
        <li>我是分类1</li>
        <li>我是分类2</li>
        <li>我是分类3</li>
        <li>我是分类4</li>
        <li>我是分类5</li>
        <li>我是分类6</li>
        <li>我是分类7</li>
        <li>我是分类8</li>
        <li>我是分类9</li>
        <li>我是分类10</li>
        <li>我是分类11</li>
        <li>我是分类12</li>
        <li>我是分类13</li>
        <li>我是分类14</li>
        <li>我是分类15</li>
        <li>我是分类16</li>
        <li>我是分类17</li>
        <li>我是分类18</li>
        <li>我是分类19</li>
        <li>我是分类20</li>
        <li>我是分类21</li>
        <li>我是分类22</li>
        <li>我是分类23</li>
        <li>我是分类24</li>
        <li>我是分类25</li>
        <li>我是分类26</li>
        <li>我是分类27</li>
        <li>我是分类28</li>
        <li>我是分类29</li>
        <li>我是分类30</li>
        <li>我是分类31</li>
        <li>我是分类32</li>
        <li>我是分类33</li>
        <li>我是分类34</li>
        <li>我是分类35</li>
        <li>我是分类36</li>
        <li>我是分类37</li>
        <li>我是分类38</li>
        <li>我是分类39</li>
        <li>我是分类40</li>
        <li>我是分类41</li>
        <li>我是分类42</li>
        <li>我是分类43</li>
        <li>我是分类44</li>
        <li>我是分类45</li>
        <li>我是分类46</li>
        <li>我是分类47</li>
        <li>我是分类48</li>
        <li>我是分类49</li>
        <li>我是分类50</li>
        <li>我是分类51</li>
        <li>我是分类52</li>
        <li>我是分类53</li>
        <li>我是分类54</li>
        <li>我是分类55</li>
        <li>我是分类56</li>
        <li>我是分类57</li>
        <li>我是分类58</li>
        <li>我是分类59</li>
        <li>我是分类60</li>
        <li>我是分类61</li>
        <li>我是分类62</li>
        <li>我是分类63</li>
        <li>我是分类64</li>
        <li>我是分类65</li>
        <li>我是分类66</li>
        <li>我是分类67</li>
        <li>我是分类68</li>
        <li>我是分类69</li>
        <li>我是分类70</li>
        <li>我是分类71</li>
        <li>我是分类72</li>
        <li>我是分类73</li>
        <li>我是分类74</li>
        <li>我是分类75</li>
        <li>我是分类76</li>
        <li>我是分类77</li>
        <li>我是分类78</li>
        <li>我是分类79</li>
        <li>我是分类80</li>
        <li>我是分类81</li>
        <li>我是分类82</li>
        <li>我是分类83</li>
        <li>我是分类84</li>
        <li>我是分类85</li>
        <li>我是分类86</li>
        <li>我是分类87</li>
        <li>我是分类88</li>
        <li>我是分类89</li>
        <li>我是分类90</li>
        <li>我是分类91</li>
        <li>我是分类92</li>
        <li>我是分类93</li>
        <li>我是分类94</li>
        <li>我是分类95</li>
        <li>我是分类96</li>
        <li>我是分类97</li>
        <li>我是分类98</li>
        <li>我是分类99</li>
        <li>我是分类100</li>
    </ul>
</div>
</template>
<script>
import BSbetter from 'better-scroll'
export default {
name: 'sort',
data () {
    return {
        scroll:''
    }
},
mounted () {
    this.scroll = new BSbetter(this.$refs.sort,{
      probeType:3,
      click:true,
      pullUpLoad:true
    })
     this.scroll.on('scroll',(position)=>{
      console.log(position)
  })
  this.scroll.on('pullingUp',()=>{
      console.log('下拉加载更多')
  })
}

}
</script>
<style scoped>
.sort{
    height: 150px;
    background-color: red;
    overflow-y: scroll
}
</style>